import { Operation } from "../../src/domain/Operation";

export interface IOperateTest {
  title: string;
  leftOperation: Operation;
  rightOperation: Operation;
  expectedResult: number;
}
