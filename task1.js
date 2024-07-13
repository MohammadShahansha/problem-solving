// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

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

const findMale = () => {
  return persons
    .filter((person) => person.gender !== "female")
    .map((personName) => personName.name);
};

console.log(findMale());
