const FizzBuzz = (num) => {
  if (num === 0) return 0;

  if (num % 5 === 0 && num % 3 === 0) {
    return 'FizzBuzz';
  }

  if (num % 3 === 0) {
    return 'Fizz';
  }

  if (num % 5 === 0) {
    return 'Buzz';
  }

  return num;
};

function foo() {
  return 'blah';
}

function foo1() {
  return 'blah';
}

function foo2() {
  return 'blah';
}

function foo3() {
  return 'blah';
}

export default FizzBuzz;
