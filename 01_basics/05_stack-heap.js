/**  Memory in JS  **/

// we have two types of memory Stack and Heap 

// stack is used for primitive type , In stack we get the copy of data stored  

let myName = "Ashu"

let anotherName = myName;

anotherName = "Bittu"

console.log(myName);
console.log(anotherName);
/****/

/* in above example when we assing myname to another name it give a copy of the value stored , so when we change anotherName value it does make any changes to myName value*/



// heap is used for non-primiitive datatypes , In heap we get reference to the original value

let user = {
    email: "user@gmail.com",
    upi: "aser@ybl"
}



/*In heap memory reference is provided to value stored */

let userTwo = user

/* here we got the reference to user value so if we change value here it will change for each variable having same reference  */

userTwo.email = "user2@gamil.com"

console.log(user.email);
console.lohg(userTwo.email);

// both will have same value 



// Question :- define stack and heap and state the difference between both 
// explain how values are stored and assigned in both 