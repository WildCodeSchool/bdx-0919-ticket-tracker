export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public avatar: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}
