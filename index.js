function getValueById(elementId) {
  return document.getElementById(elementId).value;
}

const calculate = (initialNumber) => {
  const obj = { total: initialNumber };

  obj.outputResult = function (result = this.total) {
    document.getElementById('closure-output').innerHTML = result;
  }

  obj.add = function (number) {
    this.total += number;

    this.outputResult();
  }

  obj.subtract = function (number) {
    this.total -= number;

    this.outputResult();
  }

  obj.multiple = function (number) {
    this.total *= number;

    this.outputResult();
  }

  obj.divide = function (number) {
    if (number != 0) {
      this.total /= number;
      this.outputResult();
    } else
      this.outputResult('Can`t divide by zero')
  }

  obj.reset = function () {
    this.total = 0;

    this.outputResult();
  }

  return obj;
};

const calculator = calculate(5);

const cachesDecorator = (func) => {
  const cache = new Map();

  return function () {
    const key = [...arguments].join(', ');

    let result;

    if (cache.has(key)) {
      result = `Return result from cache: ${cache.get(key)}`;
    } else {
      const funcResult = func.apply(this, [...arguments]);
      cache.set(key, funcResult);
      result = funcResult;
    }

    return result;
  }
};

const obj = {
  num: 1,
  result: null,
  sum(num) {
    return this.num + num;
  },
};

const sum = (num) => {
  return this.num + num;
};

this.num = 4;

let decoratedSum = cachesDecorator(sum);


console.log(decoratedSum(2));
console.log(decoratedSum(2));
console.log(decoratedSum(3));

decoratedSum = cachesDecorator(obj.sum)

console.log(decoratedSum(2));
console.log(decoratedSum(2));
console.log(decoratedSum(3));

const factorial = (initialNumber) => {
  let result;

  if (initialNumber === 0) {
    result = 1;
  } else {
    result = initialNumber * factorial(--initialNumber);
  }

  document.getElementById('factorial-output').innerHTML = result;

  return result;
};