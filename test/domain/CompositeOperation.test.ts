/* eslint-disable max-classes-per-file */
import { expect } from "chai";
import { CompositeOperation } from "../../src/domain/CompositeOperation";
import { Operation } from "../../src/domain/Operation";

describe('Operation', () => {
  describe('Composite operation', () => {
    class TestCompositeOperation extends CompositeOperation {
      operate(): number {
        return 1;
      }

      public hasRightOperation(): boolean {
        return !!this.rightOperation;
      }

      public hasLeftOperation(): boolean {
        return !!this.leftOperation;
      }
    }

    class DummyOperation extends Operation {
      operate(): number {
        return 1;
      }

    }

    describe('.addOperation', () => {
      it("first time adding an operation should be load at left operation", () => {
        const compositeOperation = new TestCompositeOperation();
        compositeOperation.addOperation(new DummyOperation());
        expect(compositeOperation.hasLeftOperation());
      });

      it("second time adding an operation should be load at right operation", () => {
        const compositeOperation = new TestCompositeOperation();
        compositeOperation.addOperation(new DummyOperation());
        compositeOperation.addOperation(new DummyOperation());
        expect(compositeOperation.hasLeftOperation());
        expect(compositeOperation.hasRightOperation());
      })

      it("should not be able to add more than 2 operations", () => {
        const compositeOperation = new TestCompositeOperation();
        compositeOperation.addOperation(new DummyOperation());
        compositeOperation.addOperation(new DummyOperation());
        expect(() => compositeOperation.addOperation(new DummyOperation())).to.throw()
      })
    });
  });
});