function sum(...numbers) {
  let sum = 0;
  for (let num of numbers)
    sum += num;
  return sum;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));