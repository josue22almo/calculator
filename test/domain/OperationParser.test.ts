import { expect } from "chai";
import { OperationParser } from "../../src/domain/OperationParser";

describe('Operation parser', () => {
  describe('.parse', () => {
    it("should properly parse a sum of two numbers with an operation with the expected result", () => {
      const operationParser = new OperationParser();
      expect(operationParser.parse("10 + 10").operate()).eq(20);
    })

    it("should properly parse a substractions of two numbers with an operation with the expected result", () => {
      const operationParser = new OperationParser();
      expect(operationParser.parse("20 - 10").operate()).eq(10);
    })

    it("should properly parse the product of two numbers with an operation with the expected result", () => {
      const operationParser = new OperationParser();
      const operation = operationParser.parse("20 * 10");
      expect(operation.operate()).eq(200);
    })

    it("should properly parse the division of two numbers with an operation with the expected result", () => {
      const operationParser = new OperationParser();
      expect(operationParser.parse("20 / 10").operate()).eq(2);
    })

    it("should properly parse the addition of two numbers and the substraction of another returning an operation with the expected result", () => {
      const operationParser = new OperationParser();
      expect(operationParser.parse("10 + 20 - 5").operate()).eq(25)
    })

    it("should properly parse the substraction of two numbers and the additon of another returning an operation with the expected result", () => {
      const operationParser = new OperationParser();
      expect(operationParser.parse("10 - 20 + 15").operate()).eq(5)
    })
  });
});