const persons = [
  {
    name: "Rifad",
    age: 20,
    gender: "male",
  },
  {
    name: "Rima",
    age: 24,
    gender: "female",
  },
  {
    name: "Ramjan",
    age: 26,
    gender: "male",
  },
  {
    name: "Orin",
    age: 20,
    gender: "female",
  },
];

const updatePersonAge = (persons, personName, newAge) => {
  const person = persons.find((person) => person.name === personName);
  if (person) {
    person.age = newAge;
    return persons;
  } else {
    return console.log(`This person ${personName} is not found`);
  }
};

console.log(updatePersonAge(persons, "Rifad", 22));
