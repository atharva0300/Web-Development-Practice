let firstname = "Atharva";
let lastname = "Pingale";
for (let i = 0; i <= 5; i++) {

    console.log(i);
}

/* Identifiers should follow below rules:

The first character of an identifier should be letters of the alphabet or an underscore (_) or dollar sign ($).

Subsequent characters can be letters of alphabets or digits or underscores (_) or a dollar sign ($).

Identifiers are case-sensitive. Hence, firstName and FirstName are not the same.
*/

/*
The identifiers are available in JavaScript can be categorized into three as shown below, and they can be declared into specific type based on:

The data which an identifier will hold and

The scope of the identifier

Identifier : let, const , var 

*/

/*
An identifier declared using ‘let’ keyword has a block scope i.e., it is available only within the block in which it is defined.  

The value assigned to the identifier can be done either at the time of declaration or later in the code and can also be altered further.  

All the identifiers that we have seen till now just vary in their scope and with respect to the data it holds. 
*/

let name = "ADitya";
console.log("Welcome to home" + name);
// let name = "Person";
/* This will throw an error because the identifier  'name' has been already declared and we are redeclaring the variable, which is not allowed using the 'let' keyword. */
console.log("Welcome to home" + name);

/*
The identifier that we choose to hold data that does not vary is called Constant and to declare a constant we use the 'const' keyword followed by an identifier. The value is initialized during the declaration itself and cannot be altered later. 

When we talk about the scope of the identifiers declared using the ‘const keyword, it takes the block scope i.e., they exist only in the block of code within which they are defined.  
*/
// EXAMPLE :
const pi = 3.14;
console.log("The value of Pi is : " + pi);

//pi = 3.10;
/* This will throw an error because the assignment to a const needs to be done at the time of declaration and it cannot be re-initialized. */
console.log("The value of PI is : " + pi)

/*
For example, if we say A4 size paper the dimension of the paper remains the same, but its color can vary. 

The identifiers that we declare to hold data that vary are called  Variables and to declare a variable, we optionally use the 'var' keyword.  

The value for the same can be initialized optionally. Once the value is initialized, it can be modified any number of times later in the program. 

Talking about the scope of the identifier declared using ‘var’ keyword, it takes the Function scope i.e., it is globally available to the Function within which it has been declared and it is possible to declare the identifier name a second time in the same function. 
*/

// EXAMPLE - 
var name2 = "William";
console.log("Welcome to JS course, " + name2);
var name2 = "Goth";
/* Here, even though we have redeclared the same identifier, it will not throw any error.*/
console.log("Welcome to JS course, " + name2);

/*
So let us have quick look.

Keyword	Scope	| Declaration| 	Assignment
let	Block	| Redeclaration not allowed	| Re-assigning allowed
const	| Block	| Redeclaration not allowed	| Re-assigning not allowed
var | Function | Redeclaration  allowed	| Re-assigning allowed
*/