import { Operation } from "./Operation";

export class SubstractOperation extends Operation {
  private readonly a: number;
  private readonly b: number;

  constructor(a: number, b: number) {
    super();
    this.a = a;
    this.b = b;
  }

  public operate(): number {
    return this.a - this.b;
  }
}