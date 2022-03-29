import { Operation } from "./Operation";

export class NumberOperation extends Operation {
  constructor(private readonly value: number) {
    super();
  }

  public operate(): number {
    return this.value;
  }
}