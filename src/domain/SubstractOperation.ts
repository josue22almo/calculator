import { Operation } from "./Operation";

export class SubstractOperation extends Operation {
  private readonly a: Operation;
  private readonly b: Operation;

  constructor(a: Operation, b: Operation) {
    super();
    this.a = a;
    this.b = b;
  }

  public operate(): number {
    return this.a.operate() - this.b.operate();
  }
}