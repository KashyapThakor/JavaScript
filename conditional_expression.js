//if-else if- else
const prompt = require("prompt-sync")();
let age = prompt("What is your age?");
age = Number.parseInt(age);
if (age < 0) {
  console.log("This is a invalid age");
} else if (age > 0 && age < 18) {
  console.log("You can't drive");
} else {
  console.log("You can drive");
}

//switch
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $1.50 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}