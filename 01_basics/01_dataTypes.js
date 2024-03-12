"use strict"; // treat all JS code as newer version 


/*
In node we canaot use alert as this is available in browser js engine only so if we try it here we may get syntax error 
alert (3 + 3 ) :- we are using nodejs , not browser 

js is a constanlt evolving language and with each update new features are added without leaving the previous , 
so if we are writing js code now we can use use strict to follow newer standard

original documentation :- https://tc39.es/ecma262/
mdn can be used for reference
*/


//Datatypes 

let name = "hitesh"
let age = 18 
let isLoggedin = false

/*
Primitivite Data types 
number => 2 to power 52
bigint => more larger number 
string => any value inside double or single quotes
boolean => true/value
null => standlone value :- it is empty value defined but empty 
undefined => value not assigned 
symbol => unique


*/


// We can alse use type of to check datatype of any variable ex
// when talking typeOf null it is object but in case of undefined it is undefined

console.log(typeof null);