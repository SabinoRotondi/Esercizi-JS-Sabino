function sumUntil(maxValue) {
  let sum = 0;
  for (let i = 1; i <= maxValue; i++) {
    console.log(`${i} +`)
    sum += i
  }
  return `= ${sum}`;
}

console.log(sumUntil(5));