import { expect } from "chai";
import { AddOperation } from "../../src/domain/AddOperation";
import { DivideOperation } from "../../src/domain/DivideOperation";
import { MultiplyOperation } from "../../src/domain/MultiplyOperation";
import { NumberOperation } from "../../src/domain/NumberOperation";
import { SubstractOperation } from "../../src/domain/SubstractOperation";
import { IOperateTest } from "./IOperateTest";

describe('Operation', () => {
  describe('Substract operation', () => {
    describe('.operate', () => {
      const tests: IOperateTest[] = [
        {
          title: "should properly substract 10 - 10 = 0",
          leftOperation: new NumberOperation(10),
          rightOperation: new NumberOperation(10),
          expectedResult: 0,
        },
        {
          title: "should properly substract 20 + 10 - 10 = 20",
          leftOperation: new AddOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 20,
        },
        {
          title: "should properly substract 20 * 10 - 10 = 190",
          leftOperation: new MultiplyOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 190,
        },
        {
          title: "should properly substract 20 / 10 - 10 = -8",
          leftOperation: new DivideOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: -8,
        },
      ];

      tests.forEach((test) => {
        it(test.title, () => {
          expect(new SubstractOperation(test.leftOperation, test.rightOperation).operate()).eq(test.expectedResult);
        })
      })
    });
  });
});