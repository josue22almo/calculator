import { expect } from "chai";
import { DivideOperation } from "../../src/domain/DivideOperation";
import { MultiplyOperation } from "../../src/domain/MultiplyOperation";
describe('Operation', () => {
  describe('Divide operation', () => {
    describe('.operate', () => {
      it("should properly divide 10 / 10 = 1", () => {
        expect(new DivideOperation(10, 10).operate()).eq(1);
      })
    });
  });
});