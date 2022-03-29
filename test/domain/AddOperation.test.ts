import { expect } from "chai";
import { AddOperation } from "../../src/domain/AddOperation";
import { DivideOperation } from "../../src/domain/DivideOperation";
import { MultiplyOperation } from "../../src/domain/MultiplyOperation";
import { NumberOperation } from "../../src/domain/NumberOperation";
import { SubstractOperation } from "../../src/domain/SubstractOperation";
import { IOperateTest } from "./IOperateTest";


describe('Operation', () => {
  describe('Add operation', () => {
    describe('.operate', () => {
      const tests: IOperateTest[] = [
        {
          title: "should properly sum 10 + 10 = 20",
          leftOperation: new NumberOperation(10),
          rightOperation: new NumberOperation(10),
          expectedResult: 20,
        },
        {
          title: "should properly sum 20 - 10 + 10 = 20",
          leftOperation: new SubstractOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 20,
        },
        {
          title: "should properly sum 20 * 10 + 10 = 210",
          leftOperation: new MultiplyOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 210,
        },
        {
          title: "should properly sum 20 / 10 + 10 = 12",
          leftOperation: new DivideOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 12,
        },
      ];

      tests.forEach((test) => {
        it(test.title, () => {
          expect(new AddOperation(test.leftOperation, test.rightOperation).operate()).eq(test.expectedResult);
        })
      })
    });
  });
});