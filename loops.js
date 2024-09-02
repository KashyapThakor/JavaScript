//for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//for in loop
let obj = {
    Kashyap: 100,
    Jay: 95,
    Het: 90,
};

for (let k in obj) {
    console.log(k);
}

//for of loop
for (let i of "Kashyap") {
    console.log(i);
}

//while loop
const prompt = require("prompt-sync")();
let n = prompt("Enter the Number");
n = Number.parseInt(n);
let I = 0;
while (I < n) {
  console.log(I);
  I++;
}

//do while loop
let num = prompt("Enter the Number");
num = Number.parseInt(num);
let Int = 0;
do {
  console.log(Int);
  Int++;
} while (Int < num);


