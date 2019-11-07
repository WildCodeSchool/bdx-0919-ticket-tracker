export class User {
  public id: number;
  public email?: string;
  public firstname: string;
  public lastname: string;
  public github: string;
  public role: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}
