function getKeys(person) {
  const keys = [];
  for (const key in person) {
    keys.push(key);
  }
  return keys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);