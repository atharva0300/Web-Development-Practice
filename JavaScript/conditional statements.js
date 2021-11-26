// Conditional statements

// FLowchart -
/*
    1. initialization 
        Condition - 
            1. If condition evaluates to false 
                - code to be executed 
            2. If condition evaluates to true 
                - code to be executed  ( Action )
*/

/* 
    Types of conditional Statements 
        1. If - else 
        2. Switch Case 
    */

// Ternary operator 
// Example - 
let workinghours = 9.20;
let additionalhours;
(workinghours > 9.15) ? additionalhours = "You have a positive additional hours": additionalhours = "You have negative additional hours ";
console.log(additionalhours);

// We have different flavours of it-else statement
/* 
    1. Simple if statement 
    2. if-else 
    3. if-else-if ladder
*/

/* 
    if statement - 
        The 'if' statement is used to execute a block of code if the given condition evaluates to true */

// Syntax -
let condition = true;
if (condition) {
    // Block of code that will be executed, if the condition is true
}

// Exmaple-
let num1 = 12;
if (num1 % 2 == 0) {
    console.log("It is an even number! ");
} else {
    console.log("It is an odd number! ");
}
// output : It is an even number

let a = 2;
let b = 'Hello';
console.log(a += 3); // addition
// expected output : 5

console.log(b += 'world'); // concatenation 
// expected output : 'hello world'
a += 3;
console.log(a);

// It-else ladder 
/* 
    if(condition)
    {
    // block of code tat will be executed of condition1 is true
    } 
    else if(condition2)
    {
        // block of code tat will  be 
        executed if the condition1 is false and condition2 is true 
    }
    else
    {
        // block of code that will be 
        executed if the condition is false and condition2 is false 
    }
*/

// Example -
let marks = 76;
if (marks >= 75) {
    console.log("Very Good");
} else if (marks < 85 && marks >= 50) {
    console.log("Good");
} else {
    console.log("Needs improvement");
}
// Output : Needs improvement, because the value of marks is 46 which dosen't satisfy the first 2 condition checks

/* Switch case Syntax - */
/* 
    switch(expression)
    {
        case value1 : code block;
                        break;
        case value2 : code block;
                        break;
        case valueN : code block;
                        break;
        default : code block;
    }
*/

/* 'break' statement is used to come out of the switch and continue execution of statement(s) the following switch. 
 */

// Employee performance rating */
// EXAMPLE - 
var perfRating = 5;
switch (perfRating) {
    case 5:
        console.log("Very Poor");
        break;
    case 4:
        console.log("Needs improvement");
        break;
    case 3:
        console.log("Met expectations");
        break;
    case 2:
        console.log("Commendable");
        break;
    case 1:
        console.log("Outstanding");
        break;
    default:
        console.log("Sorry!! Invalid Rating.");
}