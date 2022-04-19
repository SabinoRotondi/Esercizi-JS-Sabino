const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
