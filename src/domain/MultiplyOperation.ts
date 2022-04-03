import { CompositeOperation } from "./CompositeOperation";

export class MultiplyOperation extends CompositeOperation {
  public operate(): number {
    return this.a.operate() * this.b.operate();
  }
}