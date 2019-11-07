export class User {
  public email: string;
  public firstname: string;
  public github: string;
  public id: number;
  public lastname: string;
  public role: string;
  public avatar?: string;
  public status?: string;

  constructor(input?: User) {
    Object.assign(this, input);
  }
}
