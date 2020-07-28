import { request, RequestOptions } from "http";

import { FreeAtHomeAPI } from "./FreeAtHomeAPI";
import { FreeAtHomeRestAPITokenAuthentication } from "./FreeAtHomeRestAPITokenAuthentication";
import { FreeAtHomeRestAPIPasswordAuthentication } from './FreeAtHomeRestAPIPasswordAuthentication';
import { FreeAtHomeModel } from "../model/FreeAtHomeModel";

export class FreeAtHomeRestAPI implements FreeAtHomeAPI {
  protected authentication: FreeAtHomeRestAPITokenAuthentication | FreeAtHomeRestAPIPasswordAuthentication;
  protected url: string;

  constructor(url: string, authentication: FreeAtHomeRestAPITokenAuthentication | FreeAtHomeRestAPIPasswordAuthentication) {
    this.url = url;
    this.authentication = authentication;
  }

  public async getConfiguration(): Promise<FreeAtHomeModel> {
    return new Promise<FreeAtHomeModel>((resolve, reject) => {
      const requestOptions: RequestOptions = {};

      if (this.authentication instanceof FreeAtHomeRestAPITokenAuthentication) {
        requestOptions.headers = {
          authorization: "Bearer " + this.authentication.Token
        }

        if (this.authentication.SubscriptionKey) {
          requestOptions.headers["Ocp-Apim-Subscription-Key"] = this.authentication.SubscriptionKey;
        }
      } else {
        requestOptions.auth = this.authentication.Username + ":" + this.authentication.Password;
      }

      const getConfigurationRequest = request(
        this.url + "/configuration",
        requestOptions,
        (res) => {
          let configuration = "";
          res.on('data', (d) => {
            configuration += d;
          });
          res.on("end", () => {
            resolve(JSON.parse(configuration));
          })
        }
      );

      getConfigurationRequest.on("error", (e) => {
        reject("Error occured");
      });

      getConfigurationRequest.end();
    });
  }

  public setDatapoint(siteId: string, deviceId: string, channelId: string, datapointId: string, value: string) {
    // omit site id 0..0-0..0-0..0-0..0-0..0
    if (siteId === "00000000-0000-0000-0000-000000000000") {
      siteId = undefined;
    }

    const requestOptions: RequestOptions = {};

    if (this.authentication instanceof FreeAtHomeRestAPITokenAuthentication) {
      requestOptions.headers = {
        authorization: "Bearer " + this.authentication.Token
      }

      if (this.authentication.SubscriptionKey) {
        requestOptions.headers["Ocp-Apim-Subscription-Key"] = this.authentication.SubscriptionKey;
      }
    } else {
      requestOptions.auth = this.authentication.Username + ":" + this.authentication.Password;
    }

    requestOptions.method = "PUT";

    const setDatapointRequest = request(
      this.url + "/datapoint/" + ((siteId !== undefined) ? (siteId + "/") : "") + deviceId + "." + channelId + "." + datapointId,
      requestOptions,
      (res) => {
        let configuration = "";
        res.on('data', (d) => {
          configuration += d;
        });
        res.on("end", () => {
          if (res.statusCode !== 200) {
            throw new Error(`Unexpected HTTP status code: ${ res.statusCode } !== 200`)
          }
        })
      }
    );

    setDatapointRequest.on("error", (e) => {
      throw new Error(e.toString());
    });

    setDatapointRequest.write(value);

    setDatapointRequest.end();
  }
}
