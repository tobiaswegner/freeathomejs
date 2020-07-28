import { FreeAtHomeModelChannel } from "./FreeAtHomeModel";
import { FreeAtHomeModelDatapointDOM } from "./FreeAtHomeModelDatapointDOM";

export class FreeAtHomeModelChannelDOM {
  protected inputs: { [ key: string]: FreeAtHomeModelDatapointDOM } = {};

  get Inputs(): { [ key: string]: FreeAtHomeModelDatapointDOM } {
    return this.inputs;
  }

  public getInputById(pairingId: string): FreeAtHomeModelDatapointDOM {
    return this.inputs[pairingId];
  }

  protected outputs: { [ key: string]: FreeAtHomeModelDatapointDOM } = {};

  get Outputs(): { [ key: string]: FreeAtHomeModelDatapointDOM } {
    return this.outputs;
  }

  public getOutputById(pairingId: string): FreeAtHomeModelDatapointDOM {
    return this.outputs[pairingId];
  }

  public static fromConfiguration(config: FreeAtHomeModelChannel): FreeAtHomeModelChannelDOM {
    const channel = new FreeAtHomeModelChannelDOM();

    return channel;
  }
}