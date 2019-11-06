export class Group {
  public id: number;
  public name: string;
  constructor(input: Group) {
      Object.assign(this, input);
  }
}
