"use strict";
const arr = [1, 2, 3, 4, 5];
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const calcAverageHumanAge = (dogsArr) => {
  const humanAge = dogsArr
    .map((dogAge) => {
      if (dogAge <= 2) {
        return 2 * dogAge;
      } else {
        return 16 + dogAge * 4;
      }
    })
    .filter((hAge) => {
      return hAge >= 18;
    })
    .reduce((acc, curr, _, arr) => {
      let total = acc + curr;
      return total / arr.length;
    });

  return humanAge;
};

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
