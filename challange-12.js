"use strict";
const arr = [1, 2, 3, 4, 5];
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = (arr1, arr2) => {
  const juliaShallowCopy = arr1.slice(1, -2);
  const allDataArr = [...juliaShallowCopy, ...arr2];
  allDataArr.forEach((dog, index) => {
    const type = dog >= 3 ? "an adult" : "still puppy";
    console.log(`Dog number ${index + 1} is ${type}`);
  });
};
checkDogs(julia, kate);
