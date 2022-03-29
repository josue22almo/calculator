import { AddOperation } from "../domain/AddOperation";
import { DivideOperation } from "../domain/DivideOperation";
import { MultiplyOperation } from "../domain/MultiplyOperation";
import { NumberOperation } from "../domain/NumberOperation";
import { SubstractOperation } from "../domain/SubstractOperation";

export class Calculator {
  public add(a: number, b: number): number {
    return new AddOperation(new NumberOperation(a), new NumberOperation(b)).operate();
  }

  public substract(a: number, b: number): number {
    return new SubstractOperation(new NumberOperation(a), new NumberOperation(b)).operate();
  }

  public multiply(a: number, b: number): number {
    return new MultiplyOperation(new NumberOperation(a), new NumberOperation(b)).operate();
  }

  public divide(a: number, b: number): number {
    return new DivideOperation(new NumberOperation(a), new NumberOperation(b)).operate();
  }
}