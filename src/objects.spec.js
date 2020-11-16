import { coach } from "./objects";

test("Prints information about the coach", () => {
  expect(coach.print()).toEqual(
    "Miriam Haenle is 30 years old and works for neue fische GmbH"
  );
});
