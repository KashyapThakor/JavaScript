let a = [10,20,'a',true]
console.log(a);

//a.length --> returns length of the array 
console.log(a.length);

//Indexing
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

//changing or adding the value of the array using the indexing
a[0] = 100;
a[4] = 50;
a[5] = 0;
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

//a.toString() --> converts array to string
console.log(a.toString());

//a.join(sep) --> join array elements using the seperaters.
console.log(a.join("-"));

//a.pop() --> remove the last element from the array and update the same array.
a.pop();
console.log(a.pop());
console.log(a);

//a.push(x) --> add new element to last at the array and update the same array. and return new length.
a.push(45);
console.log(a);

console.log(a.push(75));
console.log(a);

//a.shift() --> remove the first element from the array and return it and update the same array.
a.shift();
console.log(a.shift());
console.log(a);

//a.unshift(x) --> add new element to last at the array and update the same array. and return new length.
a.unshift(85);
console.log(a);

console.log(a.unshift(74));
console.log(a);

//delete a[0] --> delete the given element of the array but length remains same .
//                returns "<1 empty item>" inplace of deleted item.
delete a[0]
console.log(a);

//a.concate(b,c,...,z) --> concate all the elements in new array 
let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let ab = [11, 12, 13, 14, 15, 16, 17, 18, 19]
ac = aa.concat(ab);
console.log(ac);

//a.sort() --> modified the current array in alphabetically sort
const b = [45, 65, 18, 72, 27, 82]
b.sort();
console.log(b);

    // for desending sorting we have to give compare function as parameter 
    let compare = (a, b) =>{
            //a - b for Ascending
            //b - a for Descending
            return b - a 
    }
    b.sort(compare);
    console.log(b);

//a.reverse --> reverse the array elements
b.reverse();
console.log(b);

//a.splice(start, number, a,b,...,z)  --> start = starting Index
//                                        number = number of elements to delete 
//                                        a,b,..,z = numbers to add 
// so splice will go to start index from there ut will delete given number of elements and then add all given numbers 
// returns deleted items and modified given array
b.splice(2,2,100,200,300,400)
console.log(b);

//a.slice(x, y) --> return new array with starts from (x to y-1)
c = b.slice(2);
d = b.slice(2, 5);
console.log(c);
console.log(d);

//array.from(x) --> used to create an array from any other object
s = "Kashyap"
e = Array.from(s);
console.log(e);


