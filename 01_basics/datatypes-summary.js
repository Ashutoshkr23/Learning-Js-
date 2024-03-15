// there are two types of datatypes in js primitive and non-primitive 
/** it is based on how they are stored in memory and called  **/

/* primitive types 
they are called by value 
1. String 
2. number 
3. Boolean 
4. null 
5. undefined 
6. symbol 
7. BigInt
*/

// javascript is statically typed or dynamically types 

const score = 100
const scorevalue = null 
const isLoggedIn = false
const outSideTemp = null
let serEmail;

const id = Symbol('123')
const anotherId = symbol('123')

let bigNum = 88765789765789n  //use n at end to define big int

// here both may seems similar but is not 

// array , object and Function 

const heroes = ["ironMan" , "SpiderMan" , "Batman"]

let myObj = {
    myName: "Ashu",
    age:22
}


const myyFunction = function(){
    console.log("Hello World");
}



// to check datatype of a variable we can use typeOf 
console.log(typeof(score))


// interview question 
// typeof(null) = object

// Assignment check typeof datatype of each 


