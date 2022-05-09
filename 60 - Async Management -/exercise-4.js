const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    if (persons.find(item => item.id === id)) {
      setTimeout(() => resolve(persons.find(item => item.id === id)), 1000);
    } else {
      reject('Undefined person')
    }
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    if (jobs.find(item => item.id === id)) {
      setTimeout(() => resolve(jobs.find(item => item.id === id)), 1000);
    } else {
      reject('Undefined job')
    }
  });
}

async function print(id) {
  console.log('Scanning database');
  try {
    const person = await fetchPersonById(id);
    const job = await fetchJobById(id);
    return console.log(person.firstName, person.lastName, ':', job.jobTitle);
  } catch (e) {
    console.error(e);
  }
}

print(2)