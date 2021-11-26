// Working with Loops
// Example -

let counter = 0;
/* Same statement repeated 5 times */
counter++;
counter++;
counter++;
counter++;
counter++;
console.log(counter);

// Using loops here instead
for (var i = 0; i < 5; i++) {
    counter++;
}
console.log(counter);

/* Tyes of Loops 
    1. for 
    2. while
    3. do...while
*/

/* 
For loop syntax 
for(initialization statement; test condition statement ; update statement)
{
    statement(s);
}
*/

// Example -
let counter2 = 0;
for (let i = 0; i < counter2; i++) {
    counter2 = counter2 + 1;
    console.log(counter2);
}

// While loop
/* 
'while' loop is used when the block of code is to be executed as long as the specified condition is true. To implement the same, we use the following syntax:
*/

/* 
    Syntax : 
    while (test condition)
    {
        statement(s);
        iteration variable updation
    }
*/

console.log("\n\n");
let counter3 = 0;
let l = 0;
while (l < 5) {
    console.log(l);
    counter3++;
    l++;
    console.log(counter3);
}

// Do-while loop
/* 
    Syntax 
    do{
        statement(s);
    }while(test condition)
        // test condition is evaluated. If it is true loop statements are executed, else llop terminates 
*/

console.log("\n\n");
let counter4 = 0;
let p = 0;
do {
    console.log(p);
    counter4++;
    p++;
    console.log(counter4);
} while (p < 3);