import { expect } from "chai";
import { SubstractOperation } from "../../src/domain/SubstractOperation";

describe('Operation', () => {
  describe('Substract operation', () => {
    describe('.operate', () => {
      it("should properly substract 10 - 10 = 0", () => {
        expect(new SubstractOperation(10, 10).operate()).eq(0);
      })
    });
  });
});