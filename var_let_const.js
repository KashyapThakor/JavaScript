const variable_types =() =>{
    console.log("There are three types of variable in javascript");
    console.log("1. var");
    console.log("2. let");
    console.log("3. const");
}
  
const var_let_const =() =>{
    console.log("1. var is globally scoped while let and const are block scoped");
    console.log("2. var can be updated  & re-declared within its scope");
    console.log("3. let can be updated but not re-declared");
    console.log("4. const can neither be updated nor re-declared");
    console.log("5. var variables are initialiased with undefined whearas let and const varibles are not initialised");
    console.log("6. const must be initailiased during declaration unlike let and var");
}

variable_types();
console.log();
var_let_const();