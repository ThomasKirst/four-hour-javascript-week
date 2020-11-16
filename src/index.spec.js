import { doubleValues } from "./index";

describe("myFunctions", () => {
  it("should double all values of an array", () => {
    let testArray = [1, 2, 3];
    let result = doubleValues(testArray);
    expect(result).toEqual([2, 4, 6]);
  });
});
