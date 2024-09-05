let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//a.map(value, index, array) -->create a new array by performing some operation on array.
let b = a.map((value) => {
    value = value + 1
    console.log(value)
});
console.log(b);

let c = a.map((value) => {
    value = value + 1
    console.log(value)
    return value
});
console.log(c);

//a.filter(value) --> create a new array with filtered elements based on condition 
let d = a.filter((value) => {
    return value<5
});
console.log(d);

//a.reduce(value) --> reduce an array to the single value 
let e = a.reduce((a, b) => {
    return a + b
});
console.log(e);
