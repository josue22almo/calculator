import { expect } from "chai";
import { MultiplyOperation } from "../../src/domain/MultiplyOperation";
import { NumberOperation } from "../../src/domain/NumberOperation";

describe('Operation', () => {
  describe('Multiply operation', () => {
    describe('.operate', () => {
      it("should properly multiply 10 * 10 = 100", () => {
        expect(new MultiplyOperation(new NumberOperation(10), new NumberOperation(10)).operate()).eq(100);
      })
    });
  });
});