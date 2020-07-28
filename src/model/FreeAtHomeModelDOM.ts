import { FreeAtHomeModel } from "./FreeAtHomeModel";
import { FreeAtHomeModelSiteDOM } from "./FreeAtHomeModelSiteDOM";

export class FreeAtHomeModelDOM {
  protected sites: { [ key: string]: any } = {};

  get Sites(): { [ key: string]: any } {
    return this.sites;
  }

  public getSiteById(siteId: string): any {
    return this.sites[siteId];
  }

  public static fromConfiguration(config: FreeAtHomeModel): FreeAtHomeModelDOM {
    const dom = new FreeAtHomeModelDOM();

    for (const siteId in config) {
      if (config.hasOwnProperty(siteId)) {
        dom.sites[siteId] = FreeAtHomeModelSiteDOM.fromConfiguration(config[siteId]);
      }
    }

    return dom;
  }
}