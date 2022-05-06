const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon'
console.log(person1);
console.log(person2);

/*Viene modificato il param di person1 oltre che person2 perché la riga 7 non fa altro che un riferimento
all'oggetto person1, automaticamente riassegnando il valore viene modificato anche il param di person1*/