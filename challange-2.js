//  Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

const calculateBMI = (mass, height) => {
  BMI = mass / height ** 2;
  return BMI;
};

const compareBMI = (markBMI, johnBMI) => {
  const higherBMI = markBMI > johnBMI ? 1 : 0;
  if (higherBMI === 1) {
    console.log(
      `Mark has higher BMI of: ${markBMI} than John's BMI ${johnBMI}`
    );
  } else {
    console.log(
      `John has higher BMI of: ${johnBMI} than mark's BMI ${markBMI}`
    );
  }
};

const markBMI = calculateBMI(78, 1.69);
const johnBMI = calculateBMI(95, 1.88);

// FINAL RESULT
compareBMI(markBMI, johnBMI);
