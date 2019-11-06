export class User {
  public id: number;
  public firstname: string;
  public lastname: string;
  public avatar?: string;
  public status: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}
