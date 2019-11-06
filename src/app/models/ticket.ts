import { User } from "src/app/models/user";
export class Ticket {
  public id?: number;
  public title: string;
  public description: string;
  public createdAt: Date;
  public updatedAt: Date;
  public user: User;

  constructor(input: Ticket) {
    Object.assign(this, input);
    this.createdAt = new Date(input.createdAt);
    this.updatedAt = new Date(input.updatedAt);
  }
}
