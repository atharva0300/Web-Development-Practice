// Operators

/* 
Operators in a programming language are the symbols used to perform operations on the values. 

Operands: Represents the data. 

Operator: which performs certain operations on the operands. 
*/
let sum = 5 + 10;
console.log(sum);

/* 
The statement formed using the operator and the operands are called Expression. 

In the above example, 5+10 is an expression. 

The values are termed as operands. 

The symbol ‘+’ is the operator which indicates which operation needs to be performed. 
*/

// Types of operators
/* 
Operators are categorized into unary, binary, and ternary based on the number of operands on which they operate in an expression. 
*/
/*
    Type of oeprators : 
        Arithmetic: 
            Performs arithmatic opeartions
        Assignment : 
            Assigns value to variable 
        Relational or Comparison  : 
            Compares value and/or datatype 
        Logical  : 
            Combines expression(s) and make decision 
        Conditional : 
            Evaluates to true/false based on condition
*/

// Arithmatic operators 
/* 
    Arithmatic operators : 
        Addition : + 
        subtraction : - 
        Multiplication : * 
        Division : / 
        Modulo : % 
        Increment : ++ 
        Decrement : -- 
*/

// Example -
let sum2 = 5 + 3; // sum = 8
let differnce = 5 - 3; // difference = 2
let product = 5 * 3; // product = 15
let division = 5 / 3; // division =1
let mod = 5 % 3; // mod = 2
let value = 5;
value++; // value = 6, value incremented by 1
let value = 10;
value--; // decrement by 1 , value = 9

// Arithmatic operator when used in strings 
let firstname = "James";
let lastname = "Roche";
let name = firstname + " " + lastname;
// name = James Roche

// Adding a number to string using + operator 
let op = 10;
let newstringname = firstname + op;
// James 10

// Arithmatic operators are used for assigning values to the variables
/* 
    Arithmatic Operator : 
        Assignment : = 
        Increment and Assign : +=
        Decrement and Assign : *=
        Multiply and Assign : *=
        Divide and Assign : /=
        Modulo and Assign : %=
*/

// Example -
/* 
let num = 30; // num =30
let num += 10; // num = num + 10 =40
let num = num - 10; // num = num - 10 = 30
let num *= 30;  // num = num *10
let num =/=10 ;     // num = num /10
let num %= 10 ; // num = num % 10
// ERROR THE SHORTHAND ARITHMATIC ASSIGNMENT OPERATORS ARE THROWING ERRORS
// FIX IT

// Relational Operators
/* 
Relational operators are used for comparing values and the result of comparison is always either true or false.

Relational operators shown below do implicit data type conversion of one of the operands before comparison.
*/

//Relational Operator types - 
/* 
    Relational/Comparison operator 
        1. Greater than : > 
        2. Greater than or equals to : >=
        3. Lesser than : < 
        4. Lesser than or equals to : <=
        5. Equality : == 
        6. Inequality : !=
*/

// Example - 
10 > 10; //false 
10 >= 10; //true 
10 < 10; //false 
10 <= 10; //true 
10 == 10; // true 
10 != 10; // false

/* 
Relational operators shown below compares both the values and the value types without any implicit type conversion.
*/

/* 
    Difference in Strict equality and Strict inequality
    
-----------------------------------------------------------------
Strict equality : 
    1. Returns true value and datatype are equal
    2. Operator : ===
    3. Example : 10=="10"
    4. Result : false 
    5. Explaination : 10 and "10" have same values but 10 is a number and "10" is a string, 
    hence returns false
    
Strict inequality : 
    1. Returns true when value or datatype and inequal 
    2. Operator : !==
    3. Example : 10!=="10"
    4. Result : true
    5. Explaination : 10 and "10" have same values but 10 is a number
    and "10" is a string, hence returns true 
*/


/* Logical Operators 
Logical operators allow a program to make a decision based on multiple conditions. Each operand is considered a condition that can be evaluated to true or false. 
*/

/* Logical Operator : 
    1. Logical NOT : Negates boolean result of an expression ( ! )
    2. Logical AND : Returns true only if both the expressions are true ( && )
    3. Logical OR : returns true if either of teh expressions is true ( || )
*/

/* 
    !(10>20);   //true 
    (10>5)&&(20>20);    // false
    (10>5)||(20>20);    // true
*/


/* typeof operator */
/*"typeof" is an operator in JavaScript. 

JavaScript is a loosely typed language i.e., the type of variable is decided at runtime based on the data assigned to it. This is also called dynamic data binding. 

As programmers, if required we can use this operator typeof to find the data type of a JavaScript variable. 

The following are the ways in which it can be used and the corresponding results that it returns. 
*/

typeof "Javascript" // string 
typeof 10.5 //number
typeof 10 > 20 // boolean
typeof undefined // undefined 
typeof null // object 
typeof { itemPrice: 500 } //object