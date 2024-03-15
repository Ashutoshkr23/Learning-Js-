// basic comaprison 
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);   // here 2 is converted into number :- true
// console.log("02" > 1);

// it is important to compare same data types otherwise we may get unpreditable results 

// comparing null to zero 
// comparision operation convertes null to zero and treats it like zero , but equality operator not convert it so we get false 
// ** in js comparison and equality check works differently 
// this type of comparison are avoided

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// strict check it also checks for data types 
console.log("2"===2); // false as datatypes is different