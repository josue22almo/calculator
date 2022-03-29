import { expect } from "chai";
import { AddOperation } from "../../src/domain/AddOperation";
import { DivideOperation } from "../../src/domain/DivideOperation";
import { MultiplyOperation } from "../../src/domain/MultiplyOperation";
import { NumberOperation } from "../../src/domain/NumberOperation";
import { SubstractOperation } from "../../src/domain/SubstractOperation";
import { IOperateTest } from "./IOperateTest";

describe('Operation', () => {
  describe('Multiply operation', () => {
    describe('.operate', () => {
      const tests: IOperateTest[] = [
        {
          title: "should properly multiply 10 * 10 = 100",
          leftOperation: new NumberOperation(10),
          rightOperation: new NumberOperation(10),
          expectedResult: 100,
        },
        {
          title: "should properly multiply (20 + 10) * 10 = 300",
          leftOperation: new AddOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 300,
        },
        {
          title: "should properly multiply (20 - 10) * 10 = 100",
          leftOperation: new SubstractOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 100,
        },
        {
          title: "should properly multiply (20 / 10) * 10 = 20",
          leftOperation: new DivideOperation(new NumberOperation(20), new NumberOperation(10)),
          rightOperation: new NumberOperation(10),
          expectedResult: 20,
        },
      ];

      tests.forEach((test) => {
        it(test.title, () => {
          expect(new MultiplyOperation(test.leftOperation, test.rightOperation).operate()).eq(test.expectedResult);
        })
      })
    });
  });
});