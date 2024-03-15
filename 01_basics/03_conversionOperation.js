let score = 33

// console.log(typeof score);
// console.log(typeof(score));

// each datatype when used to convert is written in capital 

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// this way we can convert string to number but sometimes the value that we receive is can be albhabets also in that case the value we have will be NAN :- not a number  
// null is converted to zero 
// undefined is converted to NAN 
// boolean is converted to either 0 or 1 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// here 0 and 1 can be converted back to boolean true or false
// empty string is converted to false , and string with value is converted to true 

//String 

// numbers can be easily converted to string 


// ***************************** Operations ********************************

let value = 3 
let negValue = -value
// console.log(negValue);

// console.log(2+2);   //addition
// console.log(2-2);   //Subtraction
// console.log(2*2);   //Multiplication
// console.log(2**2);  // 2 race to the power 2
// console.log(2**3);  // 2 race to the power 3
// console.log(2/3);   // 2 divided by 2
// console.log(2%3);   // modulus or remainder


// Operation on string :- only add operation can be done on string 

let str1 = "Ashu"
let Str2 = "Kumar"
let str3 = str1 + Str2;
console.log(str3)

// operation on string and numbers :- 
// console.log("1"+2); // 12 
// console.log(1+"2"); // 12
// console.log("1" + 2 + 2); //122  :- if string comes forst than all others are treated as string only
// console.log(1 + 2 + "3"); // 33 :- if numbers are before string than operation on numbers are done and than added with string 

// ** above way is not the right way to write code we should use paranthesic to define the priority of operations 



// 
let num1 , num2 , num3
num1 = num2 = num3 = 4;  // now the write way to write , less readibility 


//** prefix and postfix operator  **/
// when use as prefix it increment the value after that line is executed 
// when used as postfix it increment the value on that line only 

let count = 8
let precount = ++count;
let postcount = count++;
console.log([precount , postcount]);
