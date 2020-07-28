import { FreeAtHomeModelSite } from "./FreeAtHomeModel";
import { FreeAtHomeModelDeviceDOM } from "./FreeAtHomeModelDeviceDOM";

export class FreeAtHomeModelSiteDOM {
  protected devices: { [ key: string]: FreeAtHomeModelDeviceDOM } = {};

  get Devices(): { [ key: string]: FreeAtHomeModelDeviceDOM } {
    return this.devices;
  }

  public getDeviceById(siteId: string): FreeAtHomeModelDeviceDOM {
    return this.devices[siteId];
  }

  public static fromConfiguration(config: FreeAtHomeModelSite): FreeAtHomeModelSiteDOM {
    const site = new FreeAtHomeModelSiteDOM();

    for (const deviceId in config.devices) {
      if (config.devices.hasOwnProperty(deviceId)) {
        site.devices[deviceId] = FreeAtHomeModelDeviceDOM.fromConfiguration(config.devices[deviceId]);
      }
    }

    return site;
  }
}
