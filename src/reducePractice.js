/*
Problem Statement: return total marks of the students with 
marks greater than 50 after a grace of 15 marks has 
been added to those students who scored less than 50.

use only reduce.
*/
let studentRecords = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'John', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const studentsWhoPassedWithGrace = studentRecords.reduce((total, student) => {
  let checkIfGraceAdded =
    student.marks < 50 ? student.marks + 15 : student.marks;
  let didStudentPass = checkIfGraceAdded < 50;
  return didStudentPass ? total : total + checkIfGraceAdded;
}, 0);

const people = [
  { name: 'Kyle', age: 26 },
  { name: 'John', age: 31 },
  { name: 'Sally', age: 42 },
  { name: 'Jill', age: 42 },
];

const groupByAge = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person.name);
  return groupedPeople;
}, {});

/* 
Return an object where each property is the name of the an ice cream flavor 
and each value is an integer that is the total count of that flavor.
Store the returned data in a new iceCreamTotals variable.
*/
const data = [
  {
    name: 'Superman',
    favoriteIceCreams: [
      'Strawberry',
      'Vanilla',
      'Chocolate',
      'Cookies & Cream',
    ],
  },
  {
    name: 'Batman',
    favoriteIceCreams: [
      'Cookies & Cream',
      'Mint Chocolate Chip',
      'Chocolate',
      'Vanilla',
    ],
  },
  {
    name: 'Flash',
    favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'],
  },
  {
    name: 'Aquaman',
    favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'],
  },
  {
    name: 'Green Lantern',
    favoriteIceCreams: [
      'Vanilla',
      'French Vanilla',
      'Vanilla Bean',
      'Strawberry',
    ],
  },
  {
    name: 'Robin',
    favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'],
  },
];

const iceCreamTotals = data.reduce((totals, hero) => {
  hero.favoriteIceCreams.map((iceCreamType) => {
    totals[iceCreamType] = (totals[iceCreamType] || 0) + 1;
    return iceCreamType;
  });
  return totals;
}, {});

const arraySquared = (array) => array.map((num) => Math.pow(num, 2));

const sumAllPositiveNumbers = (array) =>
  array.reduce((sum, num) => {
    return num >= 0 ? sum + num : sum;
  }, 0);

const useArrayMediaAndMeanValues = (input) => {
  return input
    .sort((a, b) => a - b)
    .reduce(
      (accumulator, currentValue, index, array) => {
        accumulator.mean += currentValue / array.length;

        if (Math.abs(index + 1 - array.length / 2) < 1) {
          accumulator.median = currentValue;
        }

        return accumulator;
      },
      { mean: 0, median: 0 }
    );
};

const nameInitials = (name) =>
  name
    .split(' ')
    .map((name) => name[0])
    .join('');

export {
  studentsWhoPassedWithGrace,
  groupByAge,
  iceCreamTotals,
  arraySquared,
  sumAllPositiveNumbers,
  useArrayMediaAndMeanValues,
  nameInitials,
};
