import { numeralToNumber } from "./numeralToNumber";

test("Should return a number", () => {

  const result = numeralToNumber("three");
  expect(typeof result).toBe("number");
  expect(result).toBe(3);

  const result0 = numeralToNumber("Three");
  expect(typeof result0).toBe("number");
  expect(result0).toBe(3);

  const result1 = numeralToNumber("Twenty-four");
  expect(typeof result1).toBe("number");
  expect(result1).toBe(24);

  const result2 = numeralToNumber("twenty four");
  expect(typeof result2).toBe("number");
  expect(result2).toBe(24);

  const result3 = numeralToNumber("Eight hundred and twelve");
  expect(typeof result3).toBe("number");
  expect(result3).toBe(812);

  const result4 = numeralToNumber("This is not a number");
  expect(result4).toBe(NaN);

  // const result5 = numeralToNumber("Seven hundred and forty nine thousand, five hundred and eighty one");
  // expect(typeof result5).toBe("number");
  // expect(result5).toBe(749581);

});