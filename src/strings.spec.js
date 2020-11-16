import { printSum } from "./strings";

test("should print a sum of two numbers", () => {
  let a = 3;
  let b = 4;
  expect(printSum(a, b)).toEqual("The sum of 3 and 4 is 7");
});
