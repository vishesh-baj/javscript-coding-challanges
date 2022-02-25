// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const calculateBMI = (mass, height) => {
  BMI = mass / height ** 2;
  return BMI;
};

const compareBMI = (markBMI, johnBMI) => {
  const higherBMI = markBMI > johnBMI ? 1 : 0;
  if (higherBMI === 1) {
    console.log(`Mark has higher BMI of: ${markBMI}`);
  } else {
    console.log(`John has higher BMI of: ${johnBMI}`);
  }
};

const markBMI = calculateBMI(78, 1.69);
const johnBMI = calculateBMI(95, 1.88);

// FINAL RESULT
compareBMI(markBMI, johnBMI);
