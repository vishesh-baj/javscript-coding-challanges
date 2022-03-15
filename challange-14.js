"use strict";

// TEST DATA
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// ? 1. Loop over the'dogs'array containing dog objects,and for each dog,calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

const recomendedPortion = (arr) => {
  arr.forEach((dog) => {
    const recommendedFood = Math.trunc(dog.weight ** 0.75 * 28) / 1000;
    dog.foodPortion = recommendedFood;
  });
};

// ? 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky

const checkPortions = (dogs) => {
  let upperRange, lowerRange;
  dogs.forEach((dog) => {
    upperRange = dog.foodPortion * 1.1;
    lowerRange = dog.foodPortion * 0.9;

    // console.log(upperRange, lowerRange, dog.foodPortion);
    if (dog.curFood / 1000 > lowerRange && dog.curFood / 1000 < upperRange) {
      dog.foodStatus = 0;
    } else if (dog.curFood / 1000 < lowerRange) {
      dog.foodStatus = -1;
    } else if (dog.curFood / 1000 > upperRange) {
      dog.foodStatus = 1;
    }
  });
};

recomendedPortion(dogs);
checkPortions(dogs);

// ? 3. Create an array containing all owners of dogs who eat to omuch ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter((dog) => dog.foodStatus === 1)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.foodStatus === -1)
  .flatMap((dog) => dog.owners);

// ? 4. Log a string to the console for each array created in 3.,like this:"Matildaand Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!

console.log(`${ownersEatTooMuch.join(" and ")}'s dog eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dog eat too little!`);

// ? 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)

console.log(dogs.some((dog) => dog.curFood === dog.recomendedPortion));

// ? 6. Log to the console whether there is any dog eating an okay amount of food (just true or false)
console.log(dogs.some((dog) => dog.foodStatus === 0));

// ? 7. Create an array containing the dogs that are eating an okay amount of food(try to reuse the condition used in 6.)
console.log(dogs.find((dog) => dog.foodStatus === 0));
// ? 8. Create a shallow copy of the'dogs'array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)

const shallowCopy = [...dogs];

shallowCopy.sort((a, b) => a.foodPortion - b.foodPortion);

console.log(shallowCopy);
