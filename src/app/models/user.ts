export class User {
  public id: number;
  public email?: string;
  public firstname: string;
  public github: string;
  public lastname: string;
  public role: string;

  constructor(input?: User) {
    Object.assign(this, input);
  }
}
