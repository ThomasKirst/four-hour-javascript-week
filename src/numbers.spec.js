import { circleArea } from "./numbers";

test("should calculate the circle area", () => {
  const radius = 10;
  expect(circleArea(radius)).toEqual(314.1592653589793);
});
