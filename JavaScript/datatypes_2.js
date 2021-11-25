// Symbol
/*
A “symbol” represents a unique identifier. You can make use of Symbol() to generate a value of this type.
*/
// empid is a new symbol now 
let empid = Symbol();

// Also, we can provide a description of the symbol generated, that can be mostly used as a name during debugging.

let empid2 = Symbol("empno");
// empid2 , is a symbol with the descripton empno

/* 
Even if we create many symbols with the same description, they are different values, thus Symbols ensures uniqueness. So the description provided can be considered as just a label.
*/

let a1 = Symbol("a");
let a2 = Symbol("a");
//alert(a1 == a2);
// Output : false
/*
Why such a rule is because strings and symbols are basically different and should not accidentally get converted to the other one.

But if it is a must to display the Symbol, then the following can be done:
*/
// EXAMPLE -
/* 
let empid = Symbol("empno");
alert(empid.toString()); // Symbol(empno), now it works
OR
//use description
let empid = Symbol("empno");
alert(empid.description); // empno

*/

// Global Symbols
/*
Till now we have seen that Symbols remain unique even
if they have the same name.But at times we may face a situation where the symbols with the same name to be the same entities.

In such a situation, we can create symbols in a global symbol registry and access them later and ensures that recurrent accesses by the same name
return exactly the same symbol.To read a symbol from the registry, use Symbol.for(key) which checks
if there’ s a symbol described as key, then returns it, otherwise creates a new symbol Symbol.for(key) and stores it in the registry by the given key.
*/

/* 
// read from the global registry
let empid = Symbol.for("empno"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let empidAgain= Symbol.for("empid");
// the same symbol
alert( empid === empidAgain ); // false

*/