import { expect } from "chai";
import { Calculator } from "../../src";

describe('Calculator', () => {
  describe(".add", () => {
    it('should properly add 10 + 10 = 20', () => {
      expect(new Calculator().add(10, 10)).eq(20);
    });
  })

  describe(".substract", () => {
    it('should properly substract 10 - 10 = 0', () => {
      expect(new Calculator().substract(10, 10)).eq(0);
    });
  })

  describe(".multiple", () => {
    it('should properly multiple 10 * 10 = 100', () => {
      expect(new Calculator().multiply(10, 10)).eq(100);
    });
  })

  describe(".divide", () => {
    it('should properly divide 10 / 10 = 1', () => {
      expect(new Calculator().divide(10, 10)).eq(1);
    });
  })
});