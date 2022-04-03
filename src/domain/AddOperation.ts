import { CompositeOperation } from "./CompositeOperation";
export class AddOperation extends CompositeOperation {
  public operate(): number {
    return this.a.operate() + this.b.operate();
  }
}