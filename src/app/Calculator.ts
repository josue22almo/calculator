import { AddOperation } from "../domain/AddOperation";
import { DivideOperation } from "../domain/DivideOperation";
import { MultiplyOperation } from "../domain/MultiplyOperation";
import { SubstractOperation } from "../domain/SubstractOperation";

export class Calculator {
  public add(a: number, b: number): number {
    return new AddOperation(a, b).operate();
  }

  public substract(a: number, b: number): number {
    return new SubstractOperation(a, b).operate();
  }

  public multiply(a: number, b: number): number {
    return new MultiplyOperation(a, b).operate();
  }

  public divide(a: number, b: number): number {
    return new DivideOperation(a, b).operate();
  }
}