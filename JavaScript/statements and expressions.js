// Working with Statements and Expressions 

/* 
Statements are instructions in JavaScript that have to be executed by a web browser. JavaScript code is made up of a sequence of statements and is executed in the same order as they are written.

A Variable declaration is the simplest example of a JavaScript statement.
*/

// SYNTAX - 
var firstName = "Newton";

//While writing client-logic in Javascript, we often combine vaariables and operators to do computations .
// This is achieved by writing expressions

/* Example - */
10 + 30; // Evaluates to numeric value 
"Hello" + "World"; // Evaluates to sring value 
//itemRating > 5; // Evaluates to boolean value 
//(age > 60); // "Senior "
/* 
Evaluates to one string value based on whether condition is true or false. 
If the condition evaluates to true then the first string value "Senior citizen" is assigned otherwise the second string value is assigned "Normal citizen" *
*/

// Example -
var operator1 = 10;
var operator2 = 50;
var product = operator1 * operator2;

// Conditional Statements - 
/* 
    Conditional Statements help you decide based on certain conditions.
    These conditions are specified by a set of conditional statements having Boolean Expressions that are evaluated to a oolean value true or false

    */

// Non-Conditional Statements -
/* Non-Conditional Statements are those statements that do not need any condition to control the program execution flow.  
 */

// Types of No-conditioal Statements 
/*
    1. Comment
    2. Break
    3. Continue
    */

// Comment - 
/* 
Types of Comments - 
    1. Single Line - 
        Starts with // ( double forward slash) and terminates at hte end of the line 
    2. Multiline - 
        They are delimited by /* and */

// Break statement 
// Syntax - break;
// Example - 

var counter = 5;
for (var i = 0; i < counter; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

// Continue statements
// Syntax - continue ;

// Example - 
console.log("\n\n");
var counter2 = 5;
for (var i = 0; i < counter2; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}