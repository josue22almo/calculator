import { expect } from "chai";
import { MultiplyOperation } from "../../src/domain/MultiplyOperation";

describe('Operation', () => {
  describe('Multiply operation', () => {
    describe('.operate', () => {
      it("should properly multiply 10 * 10 = 100", () => {
        expect(new MultiplyOperation(10, 10).operate()).eq(100);
      })
    });
  });
});