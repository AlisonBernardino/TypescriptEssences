// Including functions callbacks

// Sample 01 - Adding "callback"
function sumItems(
  itemA: number,
  itemB: number,
  //   Callbacks can have multiple parameters, "void" return type, etc.
  callbackItem: (specialValue: number) => number
): number {
  let itemsSumTotal = itemA + itemA;
  return callbackItem(itemsSumTotal);
}

// Sample 02
function potentializeValue(baseValue: number): number {
  return baseValue * baseValue;
}

// Sample 03
function splitValueByItself(baseNumber: number): number {
  let divisionResult = baseNumber / baseNumber;
  return divisionResult;
}

// Function + callback ignition
console.log(sumItems(11, 9, potentializeValue));
console.log(sumItems(15, 12, splitValueByItself));
