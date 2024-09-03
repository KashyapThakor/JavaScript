const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);


//string methods

//a.length --> returns length of the string 
const string = "Kashyap"
console.log(string.length);

//Indexing
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);
console.log(string[4]);
console.log(string[5]);
console.log(string[6]);
console.log(string[7]);

//a.includes(x) --> check the given substring in the string and return 'true' or 'false'
console.log(string.includes("sh"));
console.log(string.includes("SH"));

//a.startsWith(x) --> check the string is starts with substring and return 'true' or 'false'
console.log(string.startsWith("K"));
console.log(string.startsWith("s"));

//a.endsWith(x) --> check the string is starts with substring and return 'true' or 'false'
console.log(string.endsWith("p"));
console.log(string.endsWith("P"));

//a.indexOf(x,y)  --> check substring in the string and return index the first occurace of the substring
//                    returns -1 if index not found
console.log(string.indexOf("K"));
console.log(string.indexOf("a"));
console.log(string.indexOf("y"));


//a.slice(x, y)  --> retrun substring from the string from index (x to y-1)
console.log(string.slice(1, 4));

//changing the case 
console.log(string.toUpperCase());
console.log(string.toLowerCase());

//a.replace(x,y); --> replace first occurance of x with y 
const updated = string.replace("yap", "T");
console.log(updated);

//a.replaceAll(x,y); --> replace all occurance of x with y 
const updated1 = string.replaceAll("a", "A");
console.log(updated1);