function memoize(fn) {
  let cache = {};
  return function (x) {
    if (x in cache) {
      return 'fetch from cache' + ' ' + fn(x)
    } else {
      cache[x] = fn(x)
      return 'calculating for' + ' ' + fn(x)
    }
  }
}

function calcfactorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * calcfactorial(x - 1);
}

factorial = memoize(calcfactorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(6));