const person = {
    firstName: '',
    lastName: '',
    set first(value) {
        return this.firstName = value;
    },
    set last(value) {
        return this.lastName = value;
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

};

const john = Object.create(person);
const simon = Object.create(person);


john.firstName = 'John';
john.lastName = 'Doe';
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName); // John Doe
console.log(simon.fullName); // Simon Collins