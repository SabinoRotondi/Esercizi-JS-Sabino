function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullname = this.firstName + ' ' + this.lastName;
};

let john = new Person('John', 'Doe');
let simon = new Person('Simon', 'Collins');


console.log(john.fullname); // John Doe
console.log(simon.fullname); // Simon Collins