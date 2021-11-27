// Classes 
/* 
1. in 2015,, ECMAScript introduces the cocept of classes to javascript 
2. They keyword class is used to create a class 
3. The costructor method is called each time the class object is created and initialized 
4. The Objects are a real-time representation of any entity 
5. We use methods to communicate betweeen various ojects, to perform various operations.
*/
// Example -
// The below code demonstrates a calculator accepting 2 numbers to do addition and subtration operations

class Calculator {
    constructor(num1, num2) {
        // Constructor used for iitializig the class instance 
        // Properties iitialized in the costructor 
        this.num1 = num1;
        this.num2 = num2;
    }

    /* Method of the class used for performing opeartions */
    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 + this.num2;
    }
}

let calculator = new Calculator(300, 100); // Creating calculator class object or instance 
console.log("Add method returns " + calculator.add()); // Add method 
// returns 400.
console.log("Subtract method returns " + calculator.subtract()); // Subtract method returns 200.

/* 
Static values can be accessed only using the class name and not using 'this' keyword. Else it will lead to an error
// Example -
*/

class Calculator2 {
    constructor(num1, num2) {
        // Constructor used for inializing the class instance 
        // Properties initialized in the constructor 
        this.num1 = num1;
        this.num2 = num2;
    }

    // Static method 
    static display() {
        console.log("This is a calculator app");
    }

    // Method of the class used for performing operations 
    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
}

// Static method display() is invoked using class name directly 
Calculator2.display();
// Output : This s a calculator app

// Inheritance
/* 
    Inheritance enables the reusability and extensibility of a given class .
    Javascript uses prototypical inheritance which is quite complex and unreadable. But, now we have the more friendly extends keyword which makes it easy to inherit te existing classes.

Keyword super can be used to refer to base class methods/constructors from a subclass 
    */

// Example -

class Vehicle {
    constructor(make, model) {
        // Base class vehicle with constructor initializing 2-member attributes
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, regNo, fuelType) {
        super(make, model); // Sub class calling Base class constructor 
        this.regNo = regNo;
        this.fuelType = fuelType;
    }
    getDetails() {
        // template literals used for dispalying details of car.
        console.log('${this.make}, ${this.model}, ${this.regNo}, ${this.fuelType}');
    }
}

let c = new Car("Hundai", "i10", "KA-016447", "Petrol"); // creating a car object 
c.getDetails();


// Class and extends help developers to create classes and implement inheritance in the application 

// Where we can create user-defined classes and extend them, even the built-in classes can be subclasses to add more functionality 

// Example -
class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }
    display() {
        let strItems = "";
        for (let val of this) {
            strItems += '${val}';
        }
        console.log(strItems);
    }
}

let letters = new MyArray("Sam", "Jack", "Tom");
letters.display();
// Note that display is not the method present in Array built-in class. The myArray subclass the Array and adds to it.
// Output : Sam Jack Tom