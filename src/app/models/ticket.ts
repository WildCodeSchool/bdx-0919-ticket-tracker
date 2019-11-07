import { Group } from "./group";
import { User } from "src/app/models/user";

export class Ticket {
  public id?: number;
  public school: any;
  public title: string;
  public description: string;
  public createdAt: Date;
  public updatedAt: Date;
  public status: string;
  public user: User;
  public groups: Group;

  constructor(input?: Ticket) {
    if (input != null) {
      Object.assign(this, input);
      this.createdAt = new Date(input.createdAt);
      this.updatedAt = new Date(input.updatedAt);
    }
  }
}
