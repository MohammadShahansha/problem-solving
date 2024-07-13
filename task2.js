// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  {
    title: "History Books",
    author: "Rifad",
    year: 2020,
  },
  {
    title: "Science fiction",
    author: "Ramjan",
    year: 2022,
  },
  {
    title: "English Books",
    author: "Rima",
    year: 2023,
  },
];

const titleOfBooks = (items) => {
  return items.map((item) => item.title);
};

console.log(titleOfBooks(books));
