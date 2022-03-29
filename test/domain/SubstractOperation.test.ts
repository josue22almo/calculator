import { expect } from "chai";
import { NumberOperation } from "../../src/domain/NumberOperation";
import { SubstractOperation } from "../../src/domain/SubstractOperation";

describe('Operation', () => {
  describe('Substract operation', () => {
    describe('.operate', () => {
      it("should properly substract 10 - 10 = 0", () => {
        expect(new SubstractOperation(new NumberOperation(10), new NumberOperation(10)).operate()).eq(0);
      })
    });
  });
});