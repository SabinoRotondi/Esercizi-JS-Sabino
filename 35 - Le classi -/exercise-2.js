class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer {
  constructor(firstName, lastName, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
  }
}

const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);