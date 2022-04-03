import { CompositeOperation } from "./CompositeOperation";

export class SubstractOperation extends CompositeOperation {
  public operate(): number {
    return this.a.operate() - this.b.operate();
  }
}