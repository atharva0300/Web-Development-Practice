// Working with Events

/* 
    When the interaction happens, the event triggers. Javascript event handlers enable the browser to handle 
    them. Javascript event handlers invoke the Javascript code to be exeucted as a reaction to the event triggered
*/

// Event -> Javascript event - handler 

// When execution of Javascript code is delayed or deferred till ome event occurs, the execution is called deferred mode execution.
// This makes Javascript an action-oriented language.

// Let us understand how javascript exeucted as a reaction to these events

// let's have a look at some of the built-in event handlers

/* 
    Event : click
    Event handler : onclick 
    Decscription  :  When the user clicks on an element, the event handler onclick handles it. 

    Event : keypress 
    Event handler : onkeypress 
    Description : When the user presses the keyboard's key, event handler onkeypress handles it. 

    Event : keyup 
    Event handler : onkeyup
    Description : When the user releases the keyboard's key, the event handler onkeyup handles it. 

    Event : load 
    Event handler : onload 
    Description : When HTML document is loaded in the browser, event handler onload handles it 

    Event : blur
    Event handler : onblur 
    Decription : When an element loses focus, the event handler onblur handles it.

    Event : change 
    Event handler : onchange
    Decription : When the selection of checked state change for input, select or text-area element changes, event handler onchange handles it
*/

// Syntax -
// <html-element eventhandler = "javascript code"> 

// Example - 
// <p onclick = "executableMe();" > Para says!!! </p>

// When the user clicks on element 'p', event handler 'onclick' listens to the event 
// 'click' and executes the 'executeMe' code written in JavaScript file against the event handler

// Example -
/* 
    <html>
    <head>
    <script src = "test.js"></script>
    </head>

    <body>
    <p onclicks = "executeMe();">Para says !!! </p>
    </body>
    </html>
*/

// 2. When the user clicks on element 'p', event handler 'onclick' listens to the event 'click' and executes the code written against the event handler. The corresponding code is the function 'executeMe' written in the "test.js" file.

function executeMe() {
    alert('A click event has been trigerred by th user');
}

// <p onclick = "executeMe();">Para says !!! </p>

// on this right-hand of this code instrad of invoking a function, we can directly write lines of code 
// like this : 

// <p onclick = "alert"("A click event has been trigerred by the user");">Para says !!! </p>

/*
This is referred to as inline scripting where we embed lies of Javascript code inline to HTML element 

Howeve, to due tight coupling with the elements, in which the code is written this approach is not ssuggested. 
The alternatie and much better approach is to use functions in Javascript 
*/

/*
Exception handling is accomplished with a try.. catch statement.
WHen the program encounters an eception, the program will terminate in an unfriendly manner. To protect against this .we can
place our code in a try.. catch statemnet and avoid terminating our program unexpectedly 

*/

/* 
Example -
*/

let num1 = 100;
let num2 = 0;
try {
    if (isNaN(num1) || isNaN(num2)) {
        throw "Not a number"
    } else {
        if (num2 == 0) {
            throw "Divide by zero error";
        } else {
            let result = num1 / num2;
        }
    }
} catch (e) {
    console.log("Error: " + e);
} finally {
    console.log("Some error occured");
}