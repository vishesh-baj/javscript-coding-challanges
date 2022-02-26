// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const bmiObj1 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  BMI: function () {
    return this.mass / this.height ** 2;
  },
};
const bmiObj2 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  BMI: function () {
    return this.mass / this.height ** 2;
  },
};

const compareBMI = (bmiObj1, bmiObj2) => {
  if (bmiObj1.BMI() > bmiObj2.BMI()) {
    console.log(
      `${bmiObj1.fullName}'s BMI(${bmiObj1.BMI()}) is higher than ${
        bmiObj2.fullName
      }'s BMI(${bmiObj2.BMI()})`
    );
  } else if (bmiObj2.BMI() > bmiObj1.BMI()) {
    console.log(
      `${bmiObj2.fullName}'s BMI(${bmiObj2.BMI()}) is higher than ${
        bmiObj1.fullName
      }'s BMI(${bmiObj1.BMI()})`
    );
  } else {
    console.log("BMI NOT FOUND");
  }
};

compareBMI(bmiObj1, bmiObj2);
