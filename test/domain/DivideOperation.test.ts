import { expect } from "chai";
import { AddOperation } from "../../src/domain/AddOperation";
import { DivideOperation } from "../../src/domain/DivideOperation";
import { MultiplyOperation } from "../../src/domain/MultiplyOperation";
import { NumberOperation } from "../../src/domain/NumberOperation";
import { SubstractOperation } from "../../src/domain/SubstractOperation";
import { IOperateTest } from "./IOperateTest";
describe('Operation', () => {
  describe('Divide operation', () => {
    describe('.operate', () => {
      const tests: IOperateTest[] = [
        {
          title: "should properly divide 10 / 10 = 1",
          leftOperation: new NumberOperation(10),
          rightOperation: new NumberOperation(10),
          expectedResult: 1,
        },
        {
          title: "should properly divide (20 + 10) / 10 = 3",
          leftOperation: new AddOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 3,
        },
        {
          title: "should properly divide 20 * 10 / 10 = 20",
          leftOperation: new MultiplyOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 20,
        },
        {
          title: "should properly divide (20 - 10) / 10 = 1",
          leftOperation: new SubstractOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 1,
        },
      ];

      tests.forEach((test) => {
        it(test.title, () => {
          expect(new DivideOperation(test.leftOperation, test.rightOperation).operate()).eq(test.expectedResult);
        })
      })
    });
  });
});