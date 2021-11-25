// Non-Primitive Data types 

/* 
The data type is said to be non-primitive if it is a collection of multiple values. 

The variables in JavaScript may not always hold only individual values which are having one of the primitive data types. 

There are times when we want to store a group of values inside a variable. 

JavaScript gives non-primitive data types named Object and Array, to implement this. 
*/

// Objects -

/* 
Objects in JavaScript are a collection of properties and are represented in the form of [key-value pairs]. 

The 'key' of a property is a string or a symbol and should be a legal identifier. 

The 'value' of a property can be any JavaScript value like Number, String, Boolean, or another object. 

JavaScript provides the number of built-in objects as a part of the language and user-defined JavaScript objects can be created using object literals. 
*/

/*
// Syntax -
{
    key1: value1;
    key2: value2;
    key3: value3;
};
*/

// EXAMPLE -
let smartPhone = {
    name: "iPhone",
    brand: "Apple",
    brand: "iOS",
    price: 50000
};

// Array -
/*
The Array is a special data structure that is used to store an ordered collection, which we cannot achieve using the objects.  

There are two ways of creating an array:
*/

// There are 2 ways of creating an array
let array = new Array();
//OR 
let array2 = [];

/* 
Either, we can declare an array as empty and later assign it with value, or while declaring we can have the value initialized. 
*/
digits = [1, 2, 3, 'four'];

// NOTE - A single array can hold multiple values of different data types.