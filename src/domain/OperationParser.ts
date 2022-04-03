import { AddOperation } from "./AddOperation";
import { DivideOperation } from "./DivideOperation";
import { MultiplyOperation } from "./MultiplyOperation";
import { NumberOperation } from "./NumberOperation";
import { Operation } from "./Operation";
import { SubstractOperation } from "./SubstractOperation";

export class OperationParser {
  public parse(expression: string): Operation {
    const operands = expression.split(" ");
    const leftOperand = Number(operands[0]);
    const operationSign = operands[1];
    const rightOperand = Number(operands[2]);
    if (operands.length === 3) {
      return this.createOperation(leftOperand, operationSign, rightOperand);
    } else {
      const secondOperation = operands[3];
      const lastOperand = Number(operands[4]);
      const operation = this.createOperation(leftOperand, operationSign, rightOperand);
      switch(secondOperation) {
        case "+":
          return new AddOperation(operation, new NumberOperation(lastOperand));
        case "-":
          return new SubstractOperation(operation, new NumberOperation(lastOperand));
        default:
            throw new Error("Operation not allowed");
      }
    }
  }

  private createOperation(leftOperand: number, operation: string, rightOperand: number): Operation {
    switch (operation) {
      case "+":
        return new AddOperation(
          new NumberOperation(leftOperand),
          new NumberOperation(rightOperand),
        )
      case "-":
        return new SubstractOperation(
          new NumberOperation(leftOperand),
          new NumberOperation(rightOperand),
        )
      case "*":
        return new MultiplyOperation(
          new NumberOperation(leftOperand),
          new NumberOperation(rightOperand),
        )
      case "/":
        return new DivideOperation(
          new NumberOperation(leftOperand),
          new NumberOperation(rightOperand),
        )
      default:
        throw new Error("Operation not allowed");
    }
  }
}