// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const squareFun = (number) => {
  return number * number;
};

const doubleFun = (number) => {
  return number * 2;
};

const add5Fun = (number) => {
  return number + 5;
};

const composeFun = (number) => {
  return add5Fun(doubleFun(squareFun(number)));
};

console.log(composeFun(4));
