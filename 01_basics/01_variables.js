const accountId = 144553
let accountEmail = "Ashu@google.com"
var accountPass = "1234"
accountCity = "jaipur"
let accountState;


/* 
// accountId = 2 :- not allowed constanst cannot be redefined
// const can be defined by only one method using const keyword 
// varaibles can be defined by two methods let and var 

Prefer not to use var 
problems with var :- var does have a global scobe so in our application we have a variable with same name then it may cuase confusion and break our program so we started let 

we can also reserve a memory without using any keyword like accountCity :- but should be avoided

we can also declare a variable but not assigned any value to it like accountState  :- undefined

*/


console.log(accountId);

// it hectic to print each variable one by one so we can use console.table to print more than one variable at once 
console.table([accountId, accountEmail , accountPass , accountCity])