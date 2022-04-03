import { CompositeOperation } from "./CompositeOperation";

export class DivideOperation extends CompositeOperation {

  public operate(): number {
    return this.a.operate() / this.b.operate();
  }
}