import assert from "assert";
import { CompositeOperation } from "./CompositeOperation";

export class AddOperation extends CompositeOperation {
  public operate(): number {
    assert(this.leftOperation);
    assert(this.rightOperation);
    return this.leftOperation.operate() + this.rightOperation.operate();
  }
}