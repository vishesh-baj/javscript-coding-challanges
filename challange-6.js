// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)

const bills = [125, 555, 44];

const calculateTip = (billValue) => {
  const tipPercent = billValue >= 50 && billValue <= 300 ? 15 : 20;
  const totalTip = (billValue * tipPercent) / 100;
  const totalBill = totalTip + billValue;

  const data = [totalTip, totalBill];
  return data;
};

const tips = bills.map((bill) => calculateTip(bill)[0]);
const totalBills = bills.map((bill) => calculateTip(bill)[1]);

console.log(`Tips Array: ${tips}`);
console.log(`Total Bills Array: ${totalBills}`);
