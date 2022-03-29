import { expect } from "chai";
import { AddOperation } from "../../src/domain/AddOperation";
import { NumberOperation } from "../../src/domain/NumberOperation";


describe('Operation', () => {
  describe('Add operation', () => {
    describe('.operate', () => {
      it("should properly sum 10 + 10 = 20", () => {
        expect(new AddOperation(new NumberOperation(10), new NumberOperation(10)).operate()).eq(20)
      })
    });
  });
});