import { FreeAtHomeModel } from "../model/FreeAtHomeModel";

export interface FreeAtHomeAPI {
  getConfiguration(): Promise<FreeAtHomeModel>;
  setDatapoint(siteId: string, deviceId: string, channelId: string, datapointId: string, value: string): void;
}
