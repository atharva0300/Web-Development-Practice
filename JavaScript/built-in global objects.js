// GLOBAL built-in objects 

/* 
    Method 	Description 
getDate() 	Return the numeric day of the month. The value ranges from 1 to 31. 
getDay() 	Returns numeric day of week. Value ranges from 0 to 6. 
getFullYear() 	Return four digit year (YYYY). 
getHours() 	Returns numeric hour. Value ranges from  0 to 23. 
getMonth() 	Returns numeric month. Value ranges from 0 to 11. 
getMilliseconds() 	Returns numeric milliseconds. Value ranges from 0 to 999.
getTime() 	Returns number of milliseconds since 1/1/1970 at 12 a.m. 
*/

// Example - 

let  dateObject1  =  new  Date();
console.log("Date is: "  +  dateObject1.getDate());
console.log("Day is: "  +  dateObject1.getDay());
console.log("Year is: "  +  dateObject1.getYear());
console.log("Horrs: "  +  dateObject1.getHours());
console.log("Month is: "  +  dateObject1.getMonth());
console.log("Time is: "  +  dateObject1.getTime());
console.log("Millisecond: "  +  dateObject1.getMilliseconds());
/* 
OUTPUT: 
Date is: 18 
Day is: 4 
Year is: 120 
Horrs: 22 
Month is: 5 
Time is: 1592499518512 
Millisecond: 512 
*/

/* 
    
    Method 	Description 
    setDate() 

    Sets the numeric day of the month. Value range from 1 to 31. 
    setFullYear() 	Sets four-digit year (YYYY). 
    setHours() 	Sets numeric hour. The value ranges from 0 to 23. 
    setMonth() 	Sets numeric month.  The value ranges from  0 to 11. 
    setMilliseconds() 	Sets numeric milliseconds. The value ranges from 0 to 999. 
    setTime() 	Sets the number of milliseconds from 1/1/1970  at 12 a.m
*/

// Example - 

let  dateObject1  =  new  Date();
dateObject1.setDate(3);
dateObject1.setYear(1996);
dateObject1.setHours(8);
dateObject1.setMonth(7);
dateObject1.setMilliseconds(2000);

console.log("Date is: "  +  dateObject1.getDate());
console.log("Year is: "  +  dateObject1.getYear());
console.log("Hours: "  +  dateObject1.getHours());
console.log("Month is: "  +  dateObject1.getMonth());
console.log("Millisecond: "  +  dateObject1.getMilliseconds());
/* 
OUTPUT: 
Date is: 3 
Year is: 96 
Hours: 8 
Month is: 7 
Millisecond: 0 
*/

let  myString  =  "Welcom to JavaScript Session"; 
console.log("Length is: "  +  myString.length); 
/*OUTPUT: returns Length is: 28,  
space between words are also considered as a character*/

/* 
    It retrieves a character that resides on the index passed as an argument 
*/
let  myString  =  "Hello World"; 
console.log("Character at position 4 is : "  +  myString.charAt(3)); 
//Returns: Character in position 4 is: l 


/*
concat() 
It accepts an unlimited number of string arguments, joins them, and returns the combined result as a new string. 
*/

  // Example -
let  myStr1  =  "Hello"; 
let  myStr2  =  " "; 
let  myStr3  =  "World"; 
console.log("Concatenated string: " + myStr1.concat(myStr2, myStr3)); 
//Returns: Concatenated string: Hello World 

/*
indexOf() 

It returns the index of the given character or maybe the given set of characters in a string passed as an argument. 
*/

// Example -
let  myString  =  "Hello World"; 
console.log("Index of character l is : " + myString.indexOf('l')); 
//Returns: Index of character l is : 2 

/*
match() 

It makes use of the regular expression to look for a specific string and returns all the strings that match.
*/

// Example -

let  myStr  =  "Are you enjoying JavaScript?"; 
console.log(myStr.match(/you/)); 
/*Returns an array: 
[ 
  'you', 
  index: 4, 
  input: 'Are you enjoying JavaScript?', 
  groups: undefined 
] 
*/
console.log("string found at index position: " + myStr.match(/you/).index);
/*Returns:  string found at index position: 4*/


/* 
replace() 

It accepts the  substring or the regular expression as well as the string that will be used for the replacement string. The idea is to replace all matches with the replacement string and provide the modified string. 
*/

// Example - 
let  myStr  =  "Are you enjoying JavaScript?"; 
myStr  =  myStr.replace('you',  'they'); 
console.log(myStr); 
//Returns Are they enjoying JavaScript? 

/* 
search() 

It searches for a match of regular expression in the given string and returns its position. If there is no match, it returns -1.
*/

// Example -
let  myString1  =  "can you find it?"; 
console.log("Occurrence of find in statement1: " + myString1.search('find')); 
let  myString2  =  "Or you can not?"; 
console.log("Occurrence of find in statement2: " + myString2.search('find'));
/*Returns: 
 The Occurrence of find in statement1: 8, 
 The Occurrence of find in statement2: -1
*/

/*
split() 

It splits the given string into the array of substrings where separator marks the index for split begin and end. Say, if the string consists of a comma (,) then the given string in the argument will be split at every comma. 
*/
// Example - 
let  myString  =  "Hello World"; 
console.log("Split string based on spaces: " + myString.split(" ")); 
//Returns: Split of string based on spaces: Hello,World 


/* 
slice()  
It extracts and returns part of a string. The Second parameter is optional. 

If only one parameter is passed, it is the index from which string will start slicing from till the end of this string. If two parameters are passed, the string between these 2 index values is sliced. 

Index value passed as the first parameter is included whereas index value passed as the second parameter is excluded.
*/

// Example - 
let  myString  =  "Hello World"; 
console.log("Slicing using 2 parameters: " + myString.slice(0, 5)); 
console.log("Slicing using 1 parameter: " + myString.slice(5)); 
/*Returns:  
Slicing using 2 parameters: Hello, 
Slicing using 1 parameter: World*/
 

/* 
substring() 

It extracts and returns part of a string. Compared to the slice() method, it can accept a negative parameter, meaning slicing should start from the end. 
*/

// Example -
let  myString  =  "Hello World"; 
console.log("Substring using 2 parameters: " + myString.substring(2, 5)); 
console.log("Substring using 1 parameter: " + myString.substring(5)); 
/*Returns: 
Substring using 2 parameters: llo 
Substring using 1 parameter: World*/
 

/*
substr() 

It is like the substring() method. 

The difference is, if the second parameter is provided, it takes the first parameter as start Index and second parameter as length for slicing string. 
*/

// Example -
let  myString  =  "Hello World"; 
console.log("Substr using 2 parameters: " + myString.substr(2, 5)); 
console.log("Substr using 1 parameter: " + myString.substr(5)); 
/*Returns: 
Substr using 2 parameters: llo W 
Substr using 1 parameter: World*/
 

/* 
toLowerCase() 

Converts characters in string to lowercase 
*/

// Example - 
let  myString  =  "Hello World"; 
console.log("Lower case string: " + myString.toLowerCase()); 
//Returns: Lower case string: hello world 


/*
toUpperCase() 

Converts characters in string to uppercase 
*/

// Example - 
let  myString  =  "Hello World"; 
console.log("Upper case string: " + myString.toUpperCase()); 
//Returns: Upper case string: HELLO WORLD 



/* 
Let us consider a scenario where we want to validate the data entered by the user in the email field. The User enters data as a string but we need to validate an email pattern. That is, a string consisting of @ and .com 

To achieve this validation, we will need a powerful tool for inspecting and processing the strings having a certain pattern. 

The regular expression is a type of object in JavaScript that helps us perform this inspection and processing. 

The RegExp object can be constructed using either of the two ways: 

using RegExp constructor 
as a literal value by enclosing within forward-slash (/) 

*/

// Syntax : 
/* 
let myPattern1 = new RegExp(pattern, modifiers); 
let myPattern2 = /pattern/modifiers 
/*Here, 
pattern specifies the string for regular expression 
modifiers are optional 
*/

/*
RegExp object construction makes use of the patterns in the form of Brackets and Quantifiers. 

They are the special symbols that we can put in our pattern to perform an advanced search in the given text as given in the following example. 
*/

// to make sure that string has @ and .com 
let  emailPattern  =  new  RegExp("(?=.@*)(?=.+.com)"); 
//to make sure that given number has digits between 0-9 and max length of 10 digits 
let  phoneNumberPattern  =  new  RegExp("(?= [0-9]{10})"); 
//to make sure password has characters a to z, number 0-9 and special symbol @,#,$,%,!,^,&,*,+ or underscore
let  passworPattern  =  new  RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])"); 


// Brackets help us define a pattern that enables the search of a given character or a digit in a string or a number.
/*
    
Pattern    Description 

[abc]       To search in a given string for any of the characters present within the brackets 
[0-9]      To search in a given string for any of the digits present within the brackets 

(a|b)       To search in a given string for either of the characters separated by ‘|’ 

[^abc]      To search in a given string for any of the characters which are not a,b, or c. 

[^0-9]      To search in a given string for any of the digits which is not between 0-9 
*/

/*
Quantifiers help us define a pattern that enables the search of a set of characters or digits in a string or a number. 
*/

/*
    Pattern 	Description 
n+      To check if the given string contains at least one “n”. 

n*      To check if the given string contains at least zero or more occurrences of n. 

n?      To check if the given string contains at least zero or one occurrence of n. 

?=n     To match any string that is followed by a specific string n. 

n{x}        To match the given string containing  X n’s. 

n{x,}       To match the given string contain at least X n’s. 

n{x,y}      To match the given string containing  X to Y n’s. 

*/


/*
    RegExp object has avery useful method:test().

    It offers the simplest way to match the given string with the expected pattern.


    It takes a parameter which is the sring to be inspected against the expected pattern. 
    When the actual pattern is compared with the exptected pattern, this function returns 
    a boolean that is either true or false.

    Let us consider the following code thsat uses RegExp to validate the given email address 

*/

let  emailPattern  =  new  RegExp("(?=.*@)(?=.+.com)"); 
let  emailString  =  prompt("Enter email id(someone@xyz.abc)"); 
if (!(emailPattern.test(emailString)))  {     
    alert("Email Id is invalid! It should contain@ and .");
} 
else  {     
    alert("Email Id is Valid"); 
} 


/* 
Additionally, we can use two string methods: search() or replace() to look for the presence of the desired pattern in a given string. 
*/

let  myPattern  =  /@gmail.com/; 
let  myString = "mark.christ@gmail.com"; 
console.log(myString.search(myPattern));
console.log(myString.replace(myPattern, '@facebook.com')); 
/* 
OUTPUT: 
11 
mark.christ@facebook.com 
*/


// Javascript Math 
/*
Properties: 

PI - holds the value of the ratio of the circle’s circumference to its diameter.
SQRT2 - holds the value of the square root of 2
*/

// Example - 
Math.PI; //Returns 3.14159265358793   
Math.SQRT2; //Returns 1.4142135623730951 


/*
max()  

It accepts multiple numeric values and returns the maximum out of them. 
*/

// Example - 
Math.max(10, 20, 20.4, 20.6, 30.5); 
//Returns: 30.5 

/* 
min()  

It accepts multiple numeric values and returns the minimum out of them 
*/

// Example -
Math.min(10, 20, 20.4, 20.6, 30.5); 
//Returns: 10 


/* 
ceil()  

It returns the upward rounded value of the given number. 
*/

// Example - 
Math.ceil(20.4); 
//Returns: 21 


/*
floor() 

It returns the downward rounded value of the given number. 
*/

// Example - 
Math.floor(20.4); 
//Returns: 20 


/*
random() 

It returns any random number between 0 and 1 inclusive of 0 and exclusive of 1.
*/

// Example - 
Math.random(); 
//Returns: 0.19083299074925186 


/* 
round() 

It returns the value of the given number rounded to the nearest integer. 
*/

// Example - 
Math.round(30.5); 
//Returns: 31 

/* 
sqrt() 

It returns square root of given number. 
*/

// Example - 
Math.sqrt(9); 
//Returns: 3 


/* 
JSON an acronym for Javascript Object notation 

It is a lightweight data-interchagne format used for storing and shring data between 
client and server overthe network 

For example -, to store and share customer information over the web, this is how 
to corresponding JSON data will look like - 
*/

let data = {
    "customers": [
        { "firstName": "Athava", "lastName": "Person" },
        { "firstName": "Aditya", "lastName": "Person2" },
        { "firstName": "Pingale", "lastName": "Person3" }
    ]
};

// Where data is the JSON object and 
// customers is the array name 

/* 
    NOTE  :

    In this code, the variable 'data' is exactly like the literal notation syntax used for object creation in JavaScript. Whereas there is a very small difference. 

For JavaScript objects we do not put the key in quotes and if values are of string data type they can be put in single or double-quotes. 

But for JSON object, it is mandatory to put the key inside the double quotes and all the values of type string inside the double-quotes. 

*/

// Example - 
/*
JavaScript Object:  {  firstName:   "Sam",  lastName:   "Fernandes"  } 
    //key need not be enclosed within quotes for JavaScript Objects 
JSON Object:  {  "firstName":   "Sam",   "lastName":   "Fernandes"  } 
    //key must be enclosed within quotes for JSON Objects 
*/

// JSON is a text-only format. It travels over the network as a string. 



/* 
Important JSON methods 
*/

/* 
    parse() - 
        Used to parse a string as JSON and helps the program to process object s
    
*/

// Example - 
let  stringJSON  =  '{"firstName":"Sam","lastName":"Fernandes"}' 
let  obj  =  JSON.parse(stringJSON); 
console.log(obj); 
//OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' } 

/* 
stringify()

Returns the JSON string corresponding to the given object. 
*/

let  dataJSON  =   {  firstName:   "Sam",  lastName:   "Fernandes"  }; 
let  obj  =  JSON.stringify(dataJSON); 
console.log(obj); 
//OUTPUT: {"firstName":"Sam","lastName":"Fernandes"} 

















 








 










 