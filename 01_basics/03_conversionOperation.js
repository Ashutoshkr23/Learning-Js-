let score = 33

console.log(typeof score);
console.log(typeof(score));

// each datatype when used to convert is written in capital 

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// this way we can convert string to number but sometimes the value that we receive is can be albhabets also in that case the value we have will be NAN :- not a number  
// null is converted to zero 
// undefined is converted to NAN 
// boolean is converted to either 0 or 1 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// here 0 and 1 can be converted back to boolean true or false
// empty string is converted to false , and string with value is converted to true 

//String 

// numbers can be easily converted to string 