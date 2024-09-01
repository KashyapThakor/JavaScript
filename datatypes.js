const datatypes =() =>{
    console.log("There are two types of datatypes in javascript");
    console.log("1. Primitive Datatypes");
    console.log("2. Object");
}
  
const primitive_datatypes =() =>{
    console.log("Primitive Datatypes are :-");
    console.log("1. Null");
    console.log("2. Number");
    console.log("3. String");
    console.log("4. Symbol");
    console.log("5. Boolean");
    console.log("6. BigInt");
    console.log("7. undefined");
}
  
const object =() =>{
    console.log("Object is a key value pair");
}
  
datatypes();
console.log();
primitive_datatypes();
console.log();
object();



let a = null;
let b = 345;
let c = true;
let d = BigInt(123);
let e = "Kashyap";
let f = Symbol("I am a nice symbol");
let g = undefined; //  or
let h;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

const i = {
    name: "Kashyap",
    section: 1,
    isPrincipal: false,
};
console.log(i);

// type of => type of method is used to check data type of method 
const type_of = () =>{
    console.log("type of method is used to check data type of method");
}
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);


