// Browser Object Model

/* 
We have read earlier in the course that JavaScript is capable of dynamically manipulating the content and style of HTML elements of the web page currently rendered on the browser. The content given for para during HTML creation or the style given for heading during HTML creation can be changed even after the page has arrived on the browser. 

This dynamic manipulation of an HTML page on the client-side itself is achieved with the help of built-in browser objects. They allow JavaScript code to programmatically control the browser and are collectively known as Browser Object Model (BOM). 

For programming purposes, the BOM model virtually splits the browser into different parts and refers to each part as a different type of built-in object. BOM is a hierarchy of multiple objects. 'window' object is the root object and consists of other objects in a hierarchy, namely, 'history' object, 'navigator' object, 'location' object, and 'document' object. 
*/


/* 
    Window : 
        1. History 
        2. Navigator 
        3. Location 
        4. Document
*/

/* 
    Document 

    Window 

    History 

    Navigator 

    Location 
*/

/* 
The HTML web page that gets loaded on the browser is represented using the 'document' object of the BOM model. 

This object considers the web page as a tree which is referred to as Document Object Model(DOM). Each node of this tree represents HTML elements in the page as 'element' object and its attributes as properties of the 'element' object. 

W3C provides DOM API consisting of properties and methods that help in traversal and manipulation of the HTML page. 

Let us look at the sample HTML web page and its corresponding DOM structure.
*/

/*
Shown below is the HTML web page and it's corresponding DOM structure that can be accessed using DOM API methods and properties: 

*/

// Sample HTML code -
/* 
    <html> 
<head> 
    <title>JavaScript DOM Implementation</title> 
</head> 
<body> 
    <h3>Let us see how HTML is rendered as DOM</h3> 
    <ul> 
        <h5>Here is the list of things we will learn</h5> 
        <li>JavaScript Object Document</li> 
    </ul> 
</body> 
</html> 
*/


// Structure of DOM - 
/*
    html 
    1. head 
            1. title 
                Javascript DOM Implementatio 
    
    2. body 
            1. h3 
                Let us see how HTML is rendered as DOM 
            2. ul 
                1. h5 
                    Here is the list of things we will learn 
                2. li 
                    Javascript object document 

*/

// getElementByld(x)
// Finds the elment with id 'x' and returns an object of type element 

// Example - 
/*
<p id="p1"> Paragraph 1</p> 
<p> Paragraph 2</p> 
<script> 
    //Selects paragraph having id 'p1'
    document.getElementById('p1'); 
</script> 

*/


// getElementsByTagName(x)
// Finds element(s) whose tag name is 'x' and return NodeList, which is a list of element objects

// Example - 
/*
    <p id="p1">Paragraph 1</p> 
<p>Paragraph 2</p> 
<script> 
    document.getElementsByTagName('p'); 
</script> 
//OUTPUT:  
//Paragraph 1 
//Paragraph 2 

*/


// getElementByClassName()
// Find element(s) whose class attrubute's value is 'x' and returns NodeList, which 
// is list of element objects.

// Example -
/*
<p class="myClass">Paragraph 1</p> 
<p>Paragraph 2</p> 
<script> 
    //Selects paragraph having class = "myClass"
    var x = document.getElementsByClassName('myClass'); 
</script> 

*/


// querySelectorAll()
// Find element(s) by CSs selectors and return NodeLIst, which is a list of element objects.

// Example -
/* 
<p class="blue">Paragraph 1</p> 
<script>     
    var x = document.querySelectorAll("p.blue");
    x[0].innerHTML;     
</script>  
//OUTPUT: Paragraph 1 

*/


// Using the properties of the document
/*
    1. the body returns body element. Usage : document.body;
    2. the forms returns all form elements. Usage : document.forms;
    3. the head returns the head element. Usage : document.head;
    4. The images return all the images elements. Usage : document.imgaes;
*/

/* 
    To manipulate the content of html, pages we can use the following properties of 'elemets'
    object, given by DOm APi;

*/

// innerHTML 
// it gives access to the content within HTML elements like div , p , h1 etc. You can set/get a text.


// Example -
/*
<div id="div1"> 
    <h1 id="heading1">Welcome to JavaScript Tutorial</h1> 
          <p id="para1" style="color: blue;">Let us learn DOM API</p>
</div> 
<script>
    //retieves current content 
    document.getElementById("heading1").innerHTML;
    //sets new content 
    document.getElementById.innerHTML = "Heading generated dynamically" 
</script> 

*/


// attribute
// It is used to set new values to given atributes

// Example -
/*
<head> 
    <title>JavaScript DOM Implementation</title> 
    <style> 
        .div2 { 
            color: yellow; 
        } 
    </style> 
</head> 
<body> 
    <div id="div1"> 
        <h1 id="heading1">Welcome to JavaScript Tutorial</h1> 
        <p id="para1" style="color: blue;">Let us learn DOM API</p> 
    </div> 
    <script> 
        document.getElementById("div1").attributes[0].value; 
        document.getElementById("div1").setAttribute('class', 'div2'); 
    </script> 
</body> 

*/
/* output : 
    Welcome to Javascroipt Tutorial 
    Let us learn DOM API
*/



// style 
/* It gives access to the style attribute of the HTML element and allows it to manipulate the CSS modifications dynamically. 
 */

// Exmample-
/* 
<div id="div1"> 
    <h1 id="heading1">Welcome to JavaScript Tutorial</h1> 
    <p id="para1" style="color: blue;">Let us learn DOM API</p> 
</div> 
    
<script> 
    //resets style property 
    document.getElementById("div1").style.color = "red"; 
</script> 

*/



// innerHeight 
// this property holds the inner height of the window's content area .
// Example -
/*
let inHeight = window.innerHeight;
console.group("Inner height : " + inHeight);
// returns inner height : 402

*/

// innerWidth
// This property holds the inner width of teh window's content area.
// Example -
/*
let inwidth  = window.innerWidth;
console.log("Inner Width : " + inWidth );
// Returns inner Width : 1336
*/


// outerHeight 
// This property holds the outer height of the window including toolbars and scrollbars 
// Example -
/*
let outHeight = window.outerHeight;
console.log("Outer height : " + outHeight);
//returns outer height : 728
*/


// outerWidth 
// This property holds teh outer width of the window incliding toolbars and scrollbars

// Example - 
/* 
    let outWidth = window.outerWidth ;
    console.log("Outer width of Window : "  + outWidth );
    // retusn outer width : 1336 
*/


// localStorage
// This property allows access to object that stores data without any expiration date
// Example - 
/* 
    localStorage.setItem("username" , "Bob");
    console.log("item stored in localstorage is " + localStorage.getItem("username"));
    // returns item stored in teh local storage is Bob
*/


// sessionStorage
// This property allows access to objects that store data valid only for the current session.
// Example - 
/* 
sessionStorage.setItem('password', 'Bob@123'); 
console.log("Item stored in sessionStorage is " + sessionStorage.getItem('password')); 
//Returns Item stored in sessionStorage is Bob@123 

*/



// Methods

/* 
In addition to these methods, 'window' object gives us a few more methods that are helpful in the following way: 

open() method, opens a new window. Usage: window.open("http://www.xyz.com"); 

close() method, closes the current window. Usage: window.close(); 
*/


/*
Property:

length returns the number of elements in the History list. Usage: history.length; 

Methods: 

back() method, loads previous URL from history list. Usage: history.back(); 

forward() method, loads next URL from history list. Usage: history.forward(); 

go() method, loads previous URL present  at the  given number from the history list. 
*/


// appName 
// Returns the name of the client
// Example - 
//navigator.appName; 
//Browser's name: Netscape 



// appversion : 
// Returns platform ( operatinf system ) and version of the sclient ( browser )
// Example - 
/* 
console.log(navigator.appVersion); 
//5.0 (Windows NT 10.0; Win64; x64)  
//AppleWebKit/537.36 (KHTML, like Gecko)  
//Chrome/83.0.4103.106 Safari/537.36 

*/


// Platform
// Returns the name of the user's operating system
// Example - 
/* 
console.log(navigator.platform); 
//Browser's platform: Win 32 
*/


// userAgent 
// Returns string equivalent to HTTP user-agent request header. 
// Example - 
/* 
console.log(navigator.userAgent); 
//Browser's useragent: Mozilla/5.0 5.0 (Windows NT 6.1; WOW64)  
//AppleWebKit/537.36 (KHTML, like Gecko)  
//Chrome/53.0.2785.116 Safari/537.36 

*/


/*
We have talked about different objects in the BOM hierarchy for accessing the history of URLs visited by the user or to know the properties of the browser. Now, if we want to programmatically refresh the current page or navigate to a new page which objects shall we use? 

BOM hierarchy has a 'location' object for this. It contains information about the current URL in the browser window. The information can be accessed or manipulated using the following properties and methods. 

If this is the URL: http://localhost:8080/JS_Demos/myLocationFile.html, properties have the following interpretation: 
*/



// href 
// It contains the entire URl as a stirng
// Example - 
/*
console.log(location.href); 
//Returns http://localhost:8080/JS_Demos/myLocationFile.html 

*/



// hostname
// It contains the hostname part of the URL. 
// Example -
/*
console.log(location.hostname); 
//Returns localhost 

*/



// port 
// It contains a port number associated with the URL. 
// Example -
/* 
console.log(location.port) 
//Returns 8080 

*/




// pathname
// It contains a filename or path specified by the object. 
// Example- 
/* 
console.log(location.pathname); 
//Returns /JS_Demos/myLocationFile.html 


'location' object gives the following methods to reload the current page or to navigate to a new page: 
*/


// reload() 
// reloads the current HTML 
// Example -
/* 
location.reload(); 
//Current document is reloaded 

*/