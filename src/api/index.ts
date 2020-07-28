import { FreeAtHomeAPI } from "./FreeAtHomeAPI";
import { FreeAtHomeRestAPI } from "./FreeAtHomeRestAPI";
import { FreeAtHomeRestAPITokenAuthentication } from "./FreeAtHomeRestAPITokenAuthentication";
import { FreeAtHomeRestAPIPasswordAuthentication } from "./FreeAtHomeRestAPIPasswordAuthentication";

export {
  FreeAtHomeAPI,
  FreeAtHomeRestAPI,
  FreeAtHomeRestAPITokenAuthentication,
  FreeAtHomeRestAPIPasswordAuthentication
}

export function createRestAPI(url: string, authentication: FreeAtHomeRestAPITokenAuthentication | FreeAtHomeRestAPIPasswordAuthentication): FreeAtHomeAPI {
  return new FreeAtHomeRestAPI(url, authentication);
}