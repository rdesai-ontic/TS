function parseToInt<Input, Output>(
  arr: Input[],
  func: (val: Input) => Output
): Output[] {
  let str: Output;

  return arr.map((v) => {
    return func(v);
  });
}

const parsedArray: number[] = parseToInt(["1", "2", "3"], (n) => parseInt(n));
console.log(parsedArray);

// Specify constraint in generic type
// Important: You cannot return the constraint of Type, have to return the Type itself,
// Constraint is just a subset of Type
function greater<Type extends { length: number }>(a: Type, b: number): Type {
  return a.length > b ? a : ({ length: 100 } as Type);
}
console.log(greater({ length: 1, width: 20 }, 10));

// Combine 2 types in single type using union while calling function
function combine<Type>(arr1: Type[], arr2: Type[]) {
  return arr1.concat(arr2);
}
console.log(combine<number | string>([1, 2], ["Hello"]));
