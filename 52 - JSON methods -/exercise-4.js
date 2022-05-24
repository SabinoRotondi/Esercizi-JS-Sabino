const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const json = JSON.stringify(person, Object.entries(person).filter((value) => typeof value[1] === 'number').map((arr) => arr[0]));

console.log(json);