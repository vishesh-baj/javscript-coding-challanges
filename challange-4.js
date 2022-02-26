// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

const calculateTip = (billValue) => {
  const tipPercent = billValue >= 50 && billValue <= 300 ? 15 : 20;
  const totalTip = (billValue * tipPercent) / 100;
  const totalBill = totalTip + billValue;
  console.log(
    `The bill was ${billValue}, the tip was ${totalTip} and the total amount to pay is ${totalBill}`
  );
};
// three test cases
calculateTip(275);
calculateTip(40);
calculateTip(430);
