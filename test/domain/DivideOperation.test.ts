import { expect } from "chai";
import { DivideOperation } from "../../src/domain/DivideOperation";
import { MultiplyOperation } from "../../src/domain/MultiplyOperation";
import { NumberOperation } from "../../src/domain/NumberOperation";
describe('Operation', () => {
  describe('Divide operation', () => {
    describe('.operate', () => {
      it("should properly divide 10 / 10 = 1", () => {
        expect(new DivideOperation(new NumberOperation(10), new NumberOperation(10)).operate()).eq(1);
      })
    });
  });
});