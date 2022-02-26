// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉 Bonus:
// 4. Bonus:Writeafunction'calcAverage'whichtakesanarraycalled'arr'as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalBills = [];
const calculateTip = (billValue) => {
  const tipPercent = billValue >= 50 && billValue <= 300 ? 15 : 20;
  const totalTip = (billValue * tipPercent) / 100;
  const totalBill = totalTip + billValue;

  const data = [totalTip, totalBill];
  return data;
};

for (let index = 1; index < bills.length; index++) {
  const bill = bills[index];
  tips.push(calculateTip(bill)[0]);
  totalBills.push(calculateTip(bill)[1]);
}

console.log(totalBills, tips);

// calc average

const calcAverage = (arr) => {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    const arrElement = arr[index];
    total += arrElement;
  }

  return total;
};

console.log(calcAverage(bills));
