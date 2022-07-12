interface User {
  name: string;
  age: number;
}

const rid: User = {
  name: "Ridhdhish",
  age: 10,
};

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

const abc: DescribableFunction = Object.assign(
  function (num: number) {
    return true;
  },
  {
    description: "Rid",
  }
);

doSomething(abc);
