// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  {
    make: "toyota",
    model: "Camry",
    year: "2019",
  },
  {
    make: "honda",
    model: "ABC",
    year: "2015",
  },
  {
    make: "tesla",
    model: "RRR",
    year: "2024",
  },
  {
    make: "RRR",
    model: "RRR",
    year: "2022",
  },
];

const sortCarByYears = () => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarByYears());
