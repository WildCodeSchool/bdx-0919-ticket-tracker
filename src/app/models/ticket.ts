import { Group } from './group';
import { User } from 'src/app/models/user';

export class Ticket {
  public id?: number;
  public user: User;
  public group: Group;
  public title: string;
  public description: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(input?: Ticket) {
    if (input != null) {
    Object.assign(this, input);
    this.user.id =  4;
    this.createdAt = new Date(input.createdAt);
    this.updatedAt = new Date(input.updatedAt);
    }
  }
}
