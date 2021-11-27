// Working with functions

/* The JavaScript engine can execute JavaScript code in two different modes:

Immediate mode
As soon as the webpage loads on the browser, JavaScript code embedded inside it, executes without any delay.
Deferred mode
Execution of JavaScript code is deferred or delayed until any user action like data input, button click, drop-down selection, etc. takes place.
*/

/* 
The JavaScript code that we have seen until now is running in immediate mode. As soon as we load the page in the browser, the script gets executed line by line without any delay.

But in real-world application development, it is not possible to wait for sequential execution of the code written for the huge applications. JavaScript provides a solution to this problem in the form of JavaScript functions.

Functions are one of the integral components of JavaScript. A JavaScript Function is a set of statements that performs a specific task. They become a reusable unit of code.

In JavaScript, functions are first-class objects. i.e., functions can be passed as an argument to other functions, it can be a return value of another function or can be assigned as a value to a variable. JavaScript leverages this behavior to extend its capabilities.
*/

/* Types of function  */
/* 1. User-defined functions : 
    Javascript allows us to write our own functions called as used-deifned functions. The user-defined functions can also be created using a much simpler syntax called arrow function.

    2. Built-in functions : 
        Javascript provides several predefined functions that perform tasks such as displaying dialog box, parsing a string argument, timing-related operations, and so on.
    
*/

/* A function declaration also caled a function definition, consists of the function ketword, fllowed by :- 
    1. Function name 
    2. A list of parameters to the functions seperated by commas and enclosed in parenthesis, if any.
    3. A set of Javascript statements that defined the function, also caled a function body, enclsosed in cirly brackets{...}

    */

/* Syntax  - */
/* 
    function function_name(parameter= m1 )
*/

// Arrow function
let sayHello = function() {
    console.log("Welcome to Javascript");
};
sayHello();

// Here a functio without a ame, called a anoymous function, is assigned to a variable sayHello.
// Javascript has itroduces a ew ad cocise way of writing functios usig arrow otatio. The arrow function is one of the easiest ways to declare an anonymous function.

// Example -
let sayHello2 = () => {
    console.log("Welcome to Javascript");
};
sayHello2();

// Multi-parameter, multi-line code : 
calcualteCost = (ticketPrice, noOfPerson) => {
    noOfPerson = ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calcualteCost(500, 2));
// output : 1000

// No parameter , single line code 
// Of the code is a single line , we don't need{}. The expression is evaluated and automatically returned
trip = () => "Let's go to trip"
console.log(trip());
// Let's go to a trip

// One parameter, single line code
// If only one parameter, we don't need() 
trip = place => "trip to" + place;
console.log(trip("Paris"));
// Trip to Paris

// One parameter, single line code 
// if only one parameter, we can simply code use '_' and not use a variable name also
trip = _ => 'Trip to' + _;
console.log(trip("Paris"));
// Trip to Paris

// Arrow function also adds a great difference wih respect to the context object - 'this reference'.
// COnsider the below code where a regular function is defined within a method
const mybject = {
    items: [1],
    myMethod() {
        console.log(this == myObject) // true
        this.items.forEach(function() {
            console.log(this === myObject); // false 
            console.log(this === window); // true
        });
    }
}

/* 
A regular function defines its 'this' value based on how the function is invoked.

In the above-mentioned example, the myObject defines 'this' as an instance of itself. So, in line 4, the reference to 'this' points to the myObject itself. The regular function is used within the forEach() method. So, inside of the regular function, 'this' points to the window global object.
*/

/*
A regular function defines its 'this' value based on how the function is invoked.

In the above-mentioned example, the myObject defines 'this' as an instance of itself. So, in line 4, the reference to 'this' points to the myObject itself. The regular function is used within the forEach() method. So, inside of the regular function, 'this' points to the window global object.
*/

/*
JavaScript does not throw any error if the number of arguments passed during a function invocation doesn’t match with the number of parameters listed during the function definition. If the number of parameters is more than the number of arguments, then the parameters that have no corresponding arguments are set to undefined.
*/

/* 
Function parameters are the variables that are defined in the function definition and the values passed to the function when it is invoked are called arguments.

In JavaScript, function definition does not have any data type specified for the parameters, and type checking is not performed on the arguments passed to the function.

JavaScript does not throw any error if the number of arguments passed during a function invocation doesn’t match with the number of parameters listed during the function definition. If the number of parameters is more than the number of arguments, then the parameters that have no corresponding arguments are set to undefined.
*/

function multiply(num1, num2) {
    if (num2 == undefined) {
        num2 = 1;
    }
    return num1 * num2;
}
console.log(multiply(5, 6)); // 30
console.log(multiply(5)); // 5

// Javascript inroduces an option to assign default values in functions
function multiply2(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply2(5, 5)); // 25
console.log(multiply2(10)); // 10
console.log(multiply(10, undefined)); // 10

// Syntax -
/* 
    function(a , ...args )
    {
        // ...
    }
*/

/* 
The rest of the parameters can be included in the function definition by using three dots ( … ) followed by the name of the array that will hold them. 
*/


function showNumbers(x, y, ...z) {
    return z;
}
console.log(showNumbers(1, 2, 3, 4, 5)); // [3,4,5]
console.log(showNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // [5,6,7,8,9,10]

// Array destruction in functions

// Example -
let myArray = ["Andrew", "James", "Chris"];

function showDetails([arg1, arg2]) {
    console.log(arg1); // Andrew 
    console.log(arg2); // James 
}

showDetails(myArray);
/* In the above example, the first 2 elements,  'Andrew' and 'James' have been destructed into individual function parameters arg1 and arg2*/
/* 
Object destructing in functions */
let myObject = { name: "Mark", age: 25, country: "India" };

function showDetails2({ name, country }) {
    console.log(name, country); // Mark India
}

showDetails2(myObject);

/* 
In JavaScript, it is perfectly normal to have functions inside functions. The function within another function body is called a nested function.

The nested function is private to the container function and cannot be invoked from outside the container function.
*/

// Example -
function giveMessage(message) {
    let userMsg = message;

    function toUser(userName) {
        let name = userName;
        let greet = userMsg + " " + name;
        return greet;
    }
    userMsg = toUser("Bob");
    return userMsg;
}

//calling the function and printing the value 
console.log(giveMessage("The world says hello dear:"));
// The world says hello dear : Bob

/* Built-in javascript functions */
/* 

1. alert() : It throws an alert box and is often used when user interaction is required to decide whether execution should proceed or not.
            example - alert("Let us proceed");

2. confirm() : 	
It throws a confirm box where user can click "OK" or "Cancel". If "OK" is clicked, the function returns "true", else returns "false".
            example - let decision = confirm("Shall we proceed?");

3. prompt() : It produces a box where user can enter an input. The user input may be used for some processing later. This function takes parameter of type string which represents the label of the box.
            example - let userInput = prompt("Please enter your name:");

4. isNaN() : 	
This function checks if the data-type of given parameter is number or not. If number, it returns "false", else it returns "true".
            example - isNaN(30);       //false

                    isNaN('hello');  //true

5. isFinite() : It determines if the number given as parameter is a finite number. If the parameter value is NaN,positive infinity, or negative infinity, this method will return false, else will return true.
            example - isFinite(30);     //true

                    isFinite('hello'); //false

6. parseInt() : 	
This function parses string and returns an integer number.

It takes two parameters. The first parameter is the string to be parsed. The second parameter represents radix which is an integer between 2 and 36 that represents the numerical system to be used and is optional.

The method stops parsing when it encounters a non-numerical character and returns the gathered number.

It returns NaN when the first non-whitespace character cannot be converted to number.
        example - parseInt("10");         //10

                    parseInt("10 20 30");   //10, only the integer part is returned

                    parseInt("10 years");   //10

                    parseInt("years 10");   //NaN, the first character stops the parsing

7. parseFloat() : This function parses string and returns a float number. 

The method stops parsing when it encounters a non-numerical character and further characters are ignored.

It returns NaN when the first non-whitespace character cannot be converted to number.
                Example - parseFloat("10.34");      //10.34  

                        parseFloat("10 20 30");   //10

                        parseFloat("10.50 years"); //10.50

8. eval() : 	
It takes an argument of type string which can be an expression, statement or sequence of statements and evaluates them.
        Example - eval("let num1=2; let num2=3;let result= num1 * num2;console.log(result)");


9. setTimeout() : 	
It executes a given function after waiting for the specified number of milliseconds.

It takes 2 parameters. First is the function to be executed and the second is the number of milliseconds after which the given function should be executed.
            Example - function executeMe(){

                console.log("Function says hello!")

                }

                setTimeout(executeMe, 3000);

                //It executes executeMe() after 3 seconds.

10. clearTimeout() : It cancels a timeout previously established by calling setTimeout().

It takes the parameter "timeoutID" which is the identifier of the timeout that can be used to cancel the execution of setTimeout(). The ID is returned by the setTimeout().
                Example - function executeMe(){

                    console.log("Function says hello!")

                    }

                    let timerId= setTimeout(executeMe, 3000);

                    clearTimeout(timerId);

11. setInterval() : 	
It executes the given function repetitively.

It takes 2 parameters, first is the function to be executed and second is the number of milliseconds. The function executes continuously after every given number of milliseconds.
                    Example - function executeMe(){

                    console.log("Function says hello!");

                    }

                    setInterval(executeMe,3000);

                    //It executes executeMe() every 3 seconds


12. clearInterval() : It cancels the timed, repeating execution which was previously established by a call to setInterval().

It takes the parameter “intervalID” which is the identifier of the timeout that can be used to cancel the execution of setInterval(). The ID is returned by the setInterval().
                    Example - function executeMe(){

                    console.log("Function says hello!");

                    }

                    let timerId=setInterval(executeMe, 2000);

                    function stopInterval(){

                            clearInterval(timerId);

                            console.log("Function says bye to setInterval()!")

                    setTimeout(stopInterval,5000)

                    //It executes executeMe() every 2 seconds and after 5 seconds, further calls to executeMe() is stopped.
*/

// Javascript scopes can be if 3 types:
/* 
1. Global scope 
2. Local scope 
3. Block scope 
*/

// Global Variable
// Variables defined outside function have Global Scope and they are accessible anywhere in the program.

var greet = "Hello Javascript";

function message() {
    // Global variabele accessed inside the function 
    console.log("Message from inside the function " + greet);
}

message();

// Global variable accessed outside the function 
console.log("Message from outside the function : " + greet);

// Message from inside the function : Hello Javscript 
// Message from outside the function : Hello Javascript

// Variables declared inside the function would have local scope. These variables cannot be accessed outside the declared function block

function message2() {
    // local message 
    var greet = "Hello Javascript";

    // local variables are accessible inside teh fucntion 
    console.log("Message from inside the function : " + greet);
}

message2();

// Local variable cannot be accessed outside the function
console.log("Message from outside teh function : " + greet);

// Message from inside teh function : Hello Javascript 
// Uncaught referenceError : greet is not defined

// If we declare a local variable without the use of keyword 'var'/ It takes a global scope

// Example -

// Global variable
var firstName = "Mark";

function fullName() {
    // Variable declared without var has global scope 
    lastName = "Zuckerberg";
    console.log("Full name from inside the function : " + firstName + " " + lastName);
}

fullName();
console.log("Full name form outside the function : " + firstName + " " + lastName);
// Full name from inside the function : Mark Zukerberg

// Variale, declared with var keyword are function-scoped whereas variables declared with let ad cost are block-scoped ad they exist only in the block in which they are defined
/*
function testVar() {
    if (10 == 10) {
        var flag = "true";
    }
    console.log(flag); // true;
}


testVar();

*/
// In above example, the variable flag declared inside if block is accessible outside the block since it has function scope


/*
function testVar2() {
    if (10 == 10) {
        let flag = "true";
    }
    console.log(flag); // uncaught referenceError : flag is not defined
}

testVar2();
*/

// The usage of 'let' in the above code snippet has restricted the variable scope to if block. 
// const has the same scope as that of 'let'. ie - block scope

/*
Hoisting means all the variable and function declarations whenever they are present throughout our prorga, get liftedand declared to the top of the program, Only the declaration and not the initializatrion gets hoisted to the top.
*/

console.log("First name : " + firstName2); // first name ; undefined
var firstName2 = "Mark";

// Because of hoisting, the code is interpreted as below by the interpreter 
var firstName3;
console.log("First name : " + firstName3); // First name : undefined
firstName3 = "Mark";

/* 
Hoisting here helps interpret to find the declaration at the top of the program and thus reference error goes 
away. but interpreter says that the variable is not defined. This is because hoisting only lifted
the variable declaration on the top and not initialization.

Variables declared using let adn const are not hoisted to the top of the program
*/

// Example - 
/*
console.log("First name : " + firstName4);
let firstName4 = "Mark";
*/

// The above code throws an error as 'Uncaught referenceError'. Cannot access 'firstname' before initialization.