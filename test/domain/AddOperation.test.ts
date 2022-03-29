import { expect } from "chai";
import { AddOperation } from "../../src/domain/AddOperation";


describe('Operation', () => {
  describe('Add operation', () => {
    describe('.operate', () => {
      it("should properly sum 10 + 10 = 20", () => {
        expect(new AddOperation(10, 10).operate()).eq(20)
      })
    });
  });
});