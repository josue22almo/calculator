import assert from "assert";
import { Operation } from "./Operation";

export abstract class CompositeOperation extends Operation {
  protected leftOperation?: Operation;
  protected rightOperation?: Operation;

  constructor();
  constructor(a: Operation, b: Operation);
  constructor(a?: Operation, b?: Operation) {
    super();
    this.leftOperation = a;
    this.rightOperation = b;
  }

  public addOperation(operation: Operation) {
    assert(!this.leftOperation || !this.rightOperation, "All operation added");
    if (!this.leftOperation) {
      this.leftOperation = operation
    } else {
      this.rightOperation = operation;
    }
  }
}