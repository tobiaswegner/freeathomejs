export class FreeAtHomeRestAPITokenAuthentication {
  protected token: string;
  protected subscriptionKey: string;

  get Token(): string {
    return this.token;
  }

  set Token(value: string) {
    this.token = value;
  }

  get SubscriptionKey(): string {
    return this.subscriptionKey;
  }

  set SubscriptionKey(value: string) {
    this.subscriptionKey = value;
  }

  constructor(token: string, subscriptionKey?: string) {
    this.Token = token;
    this.SubscriptionKey = subscriptionKey;
  }
}
