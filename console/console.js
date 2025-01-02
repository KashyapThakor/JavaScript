console.log(console) 

//1. console.log(x) --> Outputs a message to the console.
console.log("Hi Your message id printed on a console")

//2. console.warn(x) --> Outputs a message to the console with the warning log level.
console.warn("Warning Message")

//3. console.error(x) --> Outputs a message to the console with the error log level.
console.error("error Message")

//4. console.dir(x) --> Displays an interactive listing of the properties of a specified JavaScript object.
//                        This listing let you use disclosure triangles to examine the contents of child objects.
console.dir(document.body)

//5. console.time() --> Starts a timer with a name specified as an input parameter. 
//                        Up to 10,000 simultaneous timers can run on a given page.
console.time()

//example to check time function
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEvenOrOdd(4));


//6. console.timeLog() --> Logs the value of the specified timer to the console.
console.timeLog()

//test
console.log(isEvenOrOdd(7));

//7. console.timeEnd() --> Stops the specified timer and logs the elapsed time in milliseconds since it started.
console.timeEnd()

//8. console.trace() --> Outputs a stack trace.
function foo() {
    function bar() {
      console.trace();
    }
    bar();
}

foo();

//9. console.assert() -->  used to assert a condition/statement . 
//                         static method writes an error message to the console if the assertion is false. 
//                         If the assertion is true, nothing happens..
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}

// Example -2
const a = console.assert(55>33);
console.log(a);
console.assert(33>55);

//10. console.clear() --> Clear the console.
//console.clear()

//11. console.count() --> Log the number of times this line has been called with the given label.
function greet(user) {
    console.count(user);
    return `hi ${user}`;
}
  
greet("bob");
greet("alice");
greet("alice");
console.count("alice");

//12. console.countReset() --> static method resets counter used with console.count().
function greet(user) {
    console.count(user);
    return `hi ${user}`;
}

greet("b");
greet("a");
greet("a");
console.countReset("a");
console.count("a");

//13. console.group() --> Creates a new inline group, indenting all following output by another level.
//                      To move back out a level, call console.groupEnd().
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
//14. console.groupEnd() --> Exits the current inline group.
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

//15. console.table() --> Displays tabular data as a table.
console.table(["apples", "oranges", "bananas"]);

const b = {
    a : '1Rivet',
    b : 'It Idol Technologies',
    c : 'Uffizio',
    d : 'Bosleo'
}
console.table(b);

//16. console.debug(x) --> Outputs a message to the console with the debug log level.
function calculateSum(a, b) {
    console.debug("Starting calculateSum with arguments:", a, b); // Debug information
    let sum = a + b;
    console.debug("Sum calculated:", sum); // More debug information
    return sum;
}

let result = calculateSum(5, 10);
console.log("Result:", result);

//17. console.info(x) --> Outputs a message to the console with the info log level.
console.info("inf0 Message")

//18. console.dirxml() --> Displays an XML/HTML Element representation of the specified object if possible 
//                         or the JavaScript Object view if it is not possible.
let test = ["apples", "oranges", "bananas"]
console.dirxml(test);

//19. console.groupCollapsed() --> Creates a new inline group, indenting all following output by another level. 
//However, unlike console.group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. 
//To move back out a level, call console.groupEnd().
console.groupCollapsed("User Details"); // Start a collapsed group

console.log("Name: John Doe");
console.log("Age: 30");
console.log("Occupation: Software Engineer");

console.group("Address"); // Start a nested group (expanded by default)
console.log("Street: 123 Main St");
console.log("City: Springfield");
console.log("Zip: 12345");
console.groupEnd(); // End the nested group

console.groupEnd(); // End the collapsed group

console.log("Other log outside of the group");

