// Objects in Javascript 


// Types of Objects 
/*
    1. User Defined : Creating our oen objects 

    2. In-built : 

            1. Global :

                    1. Primitive Type : 
                        They are wrapper objects for their corresponding primitive datatypes.
                        Example - Number, string , boolean etc.
                    
                        2. Miscellaneous  :
                                They are utility objects providede by Javascript 
                                Example - Date, Array , Math etc 

            2. Browser : 
                    They allow Javascript code to talk to browser and to manipulate HTML DOM 
                    Example - Browser object model ( BOM ) Document object model ( DOM ).
*/

/* 
Creating objects  - 
Each property is a [key-value] pair where the key is a string and the value can be any Javascript primitive type value, an object or even a function

Javascript objects can be created using 2 different approache

Ways of creating object 
    1. Object literals 
    2. Constructor 
*/

/* 
    Object literals - 
        Objects can be creates using object literal notation. Object literla notation is a comma-seperated 
        list of name-value wrapped inside curly braces. This promotes the encapuclation of data in a tidy 
        pacjage. This is how the objects in Javascript created using the literal notation.
*/

// Syntax-
/*
objectName = {
        // ---------- staes of the object ------------
        key_1: value_1;
        key_2: value_2;
        ...
        key_n: value_n,
        // ------- behavious of the object --------
        key_function_name_1: function(parameter) {
            // we can modify ay o the property declared aove 
        }
    },
    //...
    key_function_name_n: function(parameter) {
        // we can modify any of the property declared above 
    }
*/

// Example -

// ------------ states of the object----------
let myCar = {
    name: "Fiat",
    model: "VXI",
    color: "red",
    numberifGears: 5,
    currentGear: 3,
    currentSpeed: 45,
    // ------- behavious of the object ----------
    accelerate: function(speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter;
        return this.speedCounter;
    },

    brake: function(speedCounter) {
        this.currentSpeed = this.currentSpeed - speedCounter;
        return this.currentSpeed;
    }
}


// Modern way to create objects in a simpler way 
let name = "Atharva";
let age = 65;
let country = "USA";
let obj = { name, age, country };

// Literal property with shorthand 
// When the property and the value identifiers have the same name,, the idemtifiers can be ommitted to make it implicitely

function createCourse(name, status) {
    return { type: "Javscript", name, status };
}

function reviewCourse(name) {
    return { type: "Javscript", name };
}

/* 
earlier in Javascript to add a dynamic property to an existing object below syntax is used 

let personalDetails = {
    name : "Stian Kirkeberg",
    country : "Norway"
};

let dynamicProperty = "age";
personalDetails[dynamicProperty] = 45;
console.log(personalDetails.age);   // output : 45

*/
/* with newer updates in Javacript , after the dynamic properties can be convenientlty added using hash notation 
and the values are ocmputed to form a key-value pair*/

let dynamicProperty = "age";
let personalDetails = {
    name: "Stian Kirkeberg",
    country: "Norway",
    [dynamicProperty]: 45
};

console.log(personalDetails.age);
// output : 45

function Car(name, model, color, numberofGears, currentSpeed, currentGear) {
    // --------- states of the object ----------
    this.name = name;
    this.model = model;
    this.color = color;
    this.numberofGears = numberofGears;
    this.currentSpeed = currentSpeed;
    this.currentGear = currentGear;

    // ----- Behaviour of the object --------------
    this.accelerate = function(speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter;
        return this.currentSpeed;
    }

    this.brake = function(speedCounter) {
        this.currentSpeed = this.currentSpeed - speedCounter;
        return this.currentSpeed;
    }
}

/* 
    'this' keyword that we have used here is a Javasript pointer. It poitns to an object which owns 
    code in the curent context.

    It does not have any vlaue of its own but is only the substitute for the object referen e wherever it is 
    used 

    */

/* Example - 
    If used inside an object definitaion, it points to that object itself. It used 
    the functuion definition, it points to the object that owns the funcion

    To create objects using funtion constructor , make use of 'new' keyword, and invoke the function .
    This will initialize a variable of type object. Now using the dot operators of bracket operators we can invoke
    the object's properties or methods.
*/

/* Retrieving state using the dot operator */
myCar.name; // return "Fiat"
myCar.currentSpeed; // returns 45

// Retrieving behavious using the dor operator 
myCar.accelerate(50); // involes accelerate() with argument = 50

// Retrieving state using the bracket operator 
myCar["name"]; //return "Fiat"
myCar["currentSpeed"]; // returns 45

// Retrieving behaviour using the bracket operator 
myCar["accelerate"](50); // invokes accelrate() with argument = 50


// we can make use of the spread opeartor to combine 2 or more objects created. 
// The newly created object will hold all the properties of the merged objects 

// Syntax -

let object1Name = {
    // properties 
};

let object2Name = {
    // properties 
};

let combinedObjectName = {
    ...object1Name,
    ...object2Name
};

// The combined object will have all the properties of object1 and object2


// Example  of combining objects - 
let candidateSelected = {
    Name: "Atharva Pingale",
    Qualification: "Graduation"
};

let SelectedAs = {
    jobTitle: "System Engineer",
    location: "Bangalore"
};

let employeeInfo = {
    ...candidateSelected,
    ...SelectedAs
};

console.log(employeeInfo);
/* Output : 
    {
    Name: 'Rexha Bebe',
    Qualification: 'Graduation',
    jobTitle: 'System Engineer',
    location: 'Bangalore'
    } 
*/

// Creating a copy of an existing object with the use of spread operator

// Syntax - 
/*
let copyToBeMade = {...originalObject };

// Example -

let originalObj = { one: 1, two: 2, three: 3 };
let clonedObj = {...originalObj };

*/
/*
Here spreading the object into a list of parameters happens 
which return the result as a new object 
checking whether the objects hold the same contents or not 
*/

alert(JSON.stringify(originalObj) === JSON.stringify(clonedObj));

// Checking wheather both the objects are equal

alert(originalObj === clonedObj); // false ( not same reference )

// to show that modifyinh teh original object does not alter the copy made

originalObj.four = 4;
alert(JSON.stringify(originalObj)); // {"one" : 1 , "two" : 2 , "three" : 3 , "four" : 4}
alert(JSON.stringify(clonedObj)); // {"one" : 1 , "two" : 2 , "three" : 3}


// Destructing Objects 


// Dectructing gives a syntax which makes it easy to create objects based on variables 
/*
It also helps to extract data form an object. Destructing works even with the rest and spreasd 
operators 

In the below example an object is dectructed into individual variables 
*/

let myObject = { name: "Atharva", age: 65, country: "USA" };
let { age: currentAge } = myObject; // alias can be used with : 
console.log(name);
console.log(currentAge);

// output : Atharva 65

// An alias currenAge is used for age 

// Object destructing in functions 
function showDetails({ country }) {
    console.log(country);
}

showDetails(myObject); // invole the function using the object 
// output : California

// The property Country of the object has destructed and captured as a function parameter

// Accessing Object Properties 

/* 
    Once the object has been created, its variable or methods can be accessed in 2 different ways

    Using : 
        1. dot operator 
        2. bracket operator

        Ways of accessing Object Property
            1. Using dot operator 
            2. Using bracket opeator
*/

// Syntax - 
/*
objectName.key;
// OR 
objectName[key];

// for setting state/behaviour value,
objectName.key = value;
// OR 
objectName[key] = value;
*/

// Example -
myCar.name;
// return Fiat 

myCar.currentSpeed;
//returns 45

myCar.accelerate(50); // invokes accelerate() with argument = 50

// Retrieving state using bracket operator
myCar["name"]; // reutrn First 
myCar["currentSpeed"]; // returns 45

myCar["accelerate"](50);
// invokes accelerate() with argument = 50

// To work with all the keys of an object, we have a particular form of the loop:for..in. 
//This is a different way form the for() contruct.

// Syntax -
for (key in object) {
    // executes the body for each key among object properties s
}

// Example - 
let user = {
    name: "Atharva",
    age: 24,
    isConfirmed: true
};

for (let key in user) {
    // keys 
    console.log(key); // name , age , isConfirmed
    // values ofr the keys 
    console.log(user[key]); // Rexha , 24 , true
}

/* 
    In the case of 'for' constructs. it allows us to declare the looping variable inside 
    the loop, like let keyhere.

    Also another variable name can be made use of here instead of a key. For example, 
    "for ( let prop in obj ) " is commonly used.
*/


// Built-in Object
let dateObject1 = new Date();
console.log("Date is : " + datObject1);
// output : Date is : Thu Jan 18, 2020, <time><IST>

// OR 

let dataObject2 = new Date(2020, 5, 18, 22, 20, 23, 0000);
console.log("Date : " + dataObject2);
// output : Date : <date>

/* 
    Once the object of type 'Date' is ready we can access and use the built-in methods.
    Most of the methods providede by teh object 'Date' aim at getting a specific portion of the current time.

    Let us first explore the getter methods available on object Date.
*/