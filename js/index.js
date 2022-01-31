"use strict";

function getPow(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError();
  }
  if (
    exponent < 0 ||
    !Number.isSafeInteger(base) ||
    !Number.isSafeInteger(exponent)
  ) {
    throw new RangeError();
  }

  if (exponent === 1) {
    return base;
  } else {
    return base * getPow(base, exponent - 1);
  }
}

try {
  console.log("getPow(5, 5) :>> ", getPow(5, 5));
  console.log("getPow(5, 5) :>> ", getPow(5, 5.5));
} catch (err) {
  if (err instanceof TypeError) {
    console.log("TypeError :>> Argument must be number type");
  } else if (err instanceof RangeError) {
    console.log(
      "RangeError :>> Arg: exponent must be non negative safe int value and arg: base must be safe int value"
    );
  } else if (err instanceof Error) {
    console.log("Error :>> Something wunt wrong");
  }
}
