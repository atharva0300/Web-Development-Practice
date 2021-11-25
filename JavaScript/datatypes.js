/* 
In JavaScript, the type is not defined during variable declaration. Instead, it is determined at run-time based on the value it is initialized with. 

Hence, we can say that JavaScript language is a loosely typed or dynamically typed language. 
*/

// EXAMPLE - 
let age = 24; // number
let name = "Tom"; // String 
let qualified = true; // Boolean

/*
We can have the same variable of different types in JavaScript code based on the value that is assigned to it. 

For example, if let age = 24, the variable 'age' is of type number. But if, let age = "Twenty-Four", variable 'age' is of type string. 
*/

/*
JavaScript defines the following data types: 

Datatypes : 
    Primitive 
        number
        string 
        boolean 
        indefined 
        null
    Non-Primitive 
        Object

*/

/* Number data type */
/* 
To store a variable that holds a numeric value, the primitive data type  number is used. In almost all the programming languages a number data type gets classified as shown below: 
*/
/* Number : 
    integer 
    long 
    float 
    double 
*/
/*
But in JavaScript. the data type number is assigned to the values of type integer, long, float, and double. For example, the data type for values 300, 20.50, 10001, and 13456.89 all are considered to be of the number data type.
*/

const pi = 3.14; // its value is 3.14
const smallestNaturalNumber = 0; // its value is 0
/*
In JavaScript, any other value that does not belong to the above-mentioned types is not considered as a legal number. Such values are represented as NaN (Not-a-Number). 
*/

// EXAMPLE - 
let result2 = 0 / 0; // its value is NaN
let result3 = "Ten" * 5; // its value is NaN


/* String datatype */
/*
When a variable is used to store textual value, a primitive data type  string is used. Thus, the string represents textual values. String values are written in quotes, either single or double. 
*/
// EXAMPLE - 
let personName2 = "Atharva"; // OR 
//let personName2 = 'Atharva'; // both will haev its value as Atharva

/*
Single quotes or double quotes have no special semantics over the other. Though you must be strategic in the selection between the two when you must use one string within the other. 
*/

let ownership = "Pingale"; // OR 
//let ownership = 'Pingale';

let ownership2 = "Pingale's";
console.log(ownership2);
// let ownership = 'Rexha's';   
/*
It is a syntax error.  

Thus, remember, when you need to write a string within a string, use different quotes for both. 
*/

// ACCESSONG CHARACTERS FROM A STRING 
/*
Now, to access any character from within the string we need to be aware of its position in the string. Each character in the string occupies a position. 

The first character exists at index 0, next at index 1, and so on. 

let name = "Adi";
0th index = A 
1st index = d
2nd index = i
*/

let firstname2 = "Kevin";
let lastname2 = "Pingale";
console.log("Name : " + firstname2 + " " + lastname2);
/*Here, '+' is used for concatenation of identifiers and static content, and '\n' for a new line.*/


console.log(`Name : ${firstname2} ${lastname2}
Email : ${firstname2}_${lastname2}@abc.com`);
/* GIVES THE SAME OUTPUT AS THE ABOVE CODE */

/* 
Here using template literal, we are able to write multiple lines in the console.log in one go.

So, the template literal notation enclosed in ``(backticks) makes it convenient to have multiline statements with expressions. 

and the variables are accessed using ${} notation.
*/

// Boolean datatpe
/* 
When a variable is used to store a logical value that can be only true or false at all times, primitive data type boolean is used. Thus, boolean is a data type which represents only two values. 

Values such as 100, -5, “Cat”, 10<20, 1, 10*20+30, etc. evaluates to true whereas 0, “”, NaN, undefined, null, etc. evaluates to false.   
*/

// Undefined Datatype
/* 
When the variable is used to store "no value", primitive data type undefined is used. 

undefined is a data type in JavaScript that has a single value also termed as undefined. 

The undefined value represents "no value". 

Any variable that has not been assigned a value during declaration will be automatically assigned with the value undefined. 
*/

// EXAMPLE - 
let custName;
// here value and the datatpe are undefined

let custname2 = "john"; // here value is John and the Datatype is String 
custname2 = undefined; // here value and the Datatype are undefined

// NULL datatype
/* 
The null value represents "no object". 

If you are wondering why we would need such a data type, the answer is JavaScript variable intended to be assigned with the object at a later point in the program can be assigned null during the declaration. 
*/

// EXAMPLE - 
let item = null;
//  variable item is intended to be assigned with object later. Hence null is assigned during variable declaration

// If required, the JavaScript variable can also be checked if it is pointing to a valid object or null.
// document.write(item==null);
/* 
Note: 'document' is an object that represents the HTML document rendered on the browser window and write() method helps one to populate HTML expressions or JavaScript code directly to the document.
*/

// BigInt 
/* 
BigInt is a special numeric type that provides support for integers of random length.

A BigInt is generated by appending n to the end of an integer literal or by calling the function BigInt that generates BigInt from strings, numbers, etc.
*/

const bigintvar = 3094732078942589242964728358427092384209383445;

// OR 
const bigintvar2 = BigInt("42095349058903485034784758475034850983453");
const bigintFromNumber = BigInt(10); // Same as 10n

//NOTE = common math operations can be done on BigInt as regular numbers. But we cannot mix BigInt and regular numbers in the expression.
// Example - 
//alert(3n + 2n); // 5
//alert(7n/2n);   // 3
// alert(8n+2); // Error : Cannot mix BigInt and other types

/*
Here the division returns the result rounded towards zero, without the decimal part. Thus we can say that all operations on BigInt return BigInt.

One thing to keep in mind is, before applying operators, do convert it explicitly using either BigInt() or Number(), as shown in the below:
*/

/*
let bigintvar3 = 6 n;
let numvar = 3;
// Number to bigint 
alert(bigintvar3 + BigInt(numvar)); // 9;

// bigint to number 
alert(Number(bigintvar)  + numvar );    // 9
*/

/* Boolean opeartions on bigint works fine 
alert(8n > 2n);
alert(4n > 2);
alert(5==5n);
alert(5==5n);

if(0n)
{
    // Never executes
}
*/

/* using and && and or || 
alert(1n || 2);
// 1n, here 1n is considered truthy
alert(0n || 2);
// 2 , here 0n is considered falsy
*/