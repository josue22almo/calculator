import { Operation } from "./Operation";

export abstract class CompositeOperation extends Operation {
  protected readonly a: Operation;
  protected readonly b: Operation;

  constructor(a: Operation, b: Operation) {
    super();
    this.a = a;
    this.b = b;
  }
}