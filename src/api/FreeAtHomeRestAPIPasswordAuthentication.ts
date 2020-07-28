export class FreeAtHomeRestAPIPasswordAuthentication {
  protected username: string;
  protected password: string;

  get Username(): string {
    return this.username;
  }

  set Username(value: string) {
    this.username = value;
  }

  get Password(): string {
    return this.password;
  }

  set Password(value: string) {
    this.password = value;
  }

  constructor(username: string, password: string) {
    this.Username = username;
    this.Password = password;
  }
}
