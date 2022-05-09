const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  }, {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  }, {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    if (persons.find(item => item.id === id)) {
      setTimeout(() => resolve(persons.find(item => item.id === id)), 1000);
    } else {
      reject('Undefined person')
    }
  });
}

fetchPersonById(4)
  .then(console.log)
  .catch(console.log);