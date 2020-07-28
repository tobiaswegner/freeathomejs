export interface FreeAtHomeModelDatapoint {
  value: string;
  pairingID: number;
}

export interface FreeAtHomeModelChannel {
  inputs: { [ key: string]: FreeAtHomeModelDatapoint };
  outputs: { [ key: string]: FreeAtHomeModelDatapoint };
  displayName: string;
}

export interface FreeAtHomeModelDevice {
  channels: { [ key: string]: FreeAtHomeModelChannel };
}

export interface FreeAtHomeModelSite {
  connectionState: "online" | "offline";
  devices: { [ key: string]: any };
  floorplan: any,
  sysapName: string;
  users: any,
  properties: { [ key: string]: any };
}

export declare type FreeAtHomeModel = {
  [ key: string]: FreeAtHomeModelSite
};
