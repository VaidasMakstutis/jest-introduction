const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    // arrange and act
    let result = mathOperations.sum(1, 2);

    // assert
    expect(result).toBe(3);
  });

  test("adding 1 + 9 should return 10", () => {
    // arrange and act
    let result = mathOperations.sum(1, 9);

    // assert
    expect(result).toBe(10);
  });

  test("subtracting 2 from 10 should return 8", () => {
    // arrange and act
    let result = mathOperations.diff(10, 2);

    // assert
    expect(result).toBe(8);
  });

  test("subtracting 5 from 2 should return -3", () => {
    // arrange and act
    let result = mathOperations.diff(2, 5);

    // assert
    expect(result).toBe(-3);
  });

  test("multiplying 2 and 8 should return 16", () => {
    // arrange and act
    let result = mathOperations.product(2, 8);

    // assert
    expect(result).toBe(16);
  });

  test("equality matchers", () => {
    expect(2 * 2).toBe(4);
    expect(4 - 2).not.toBe(1);
  });

  test("truthy operators", () => {
    let name = "Software testing help";
    let n = null;
    expect(n).toBeNull();
    expect(name).not.toBeNull;

    // name has a valid value
    expect(name).toBeTruthy();

    // fail - as null is non success
    expect(n).toBeTruthy();

    // pass - null treated as false or negative
    expect(n).toBeFalsy();

    // 0 - treated as false
    expect(0).toBeFalsy();
  });

  test("numeric operators", () => {
    let num1 = 100;
    let num2 = -20;
    let num3 = 0;

    // greater than
    expect(num1).toBeGreaterThan(10);

    // less than or equal
    expect(num2).toBeLessThanOrEqual(0);

    // greater than or equal
    expect(num3).toBeGreaterThanOrEqual(0);
  });
});
