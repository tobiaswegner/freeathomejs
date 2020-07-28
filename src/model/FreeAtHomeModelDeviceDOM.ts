import { FreeAtHomeModelChannelDOM } from "./FreeAtHomeModelChannelDOM";
import { FreeAtHomeModelDevice } from "./FreeAtHomeModel";

export class FreeAtHomeModelDeviceDOM {
  protected channels: { [ key: string]: FreeAtHomeModelChannelDOM } = {};

  get Channels(): { [ key: string]: FreeAtHomeModelChannelDOM } {
    return this.channels;
  }

  public getChannelById(siteId: string): FreeAtHomeModelChannelDOM {
    return this.channels[siteId];
  }

  public static fromConfiguration(config: FreeAtHomeModelDevice): FreeAtHomeModelDeviceDOM {
    const device = new FreeAtHomeModelDeviceDOM();

    for (const channelId in config.channels) {
      if (config.channels.hasOwnProperty(channelId)) {
        device.channels[channelId] = FreeAtHomeModelChannelDOM.fromConfiguration(config.channels[channelId]);
      }
    }

    return device;
  }
}
