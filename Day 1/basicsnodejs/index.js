// Print someting on console - similar to WRITE statement in ABAP
console.log("Welcome to Anuabhv Trainings");

// variables in JavaScript
var x = 10;
var y = "Apple";
var x = 20;
var bValue = true;
console.log(x);
console.log(x, y);
console.log("Value of x is equals to", x);
console.log("Value of x is equals to " + x);

let a = 30;
// let a = 40; 
a = 40;
// Block of code
{
    let a = 50;
    console.log("Inside the block", a);
}
console.log("Outside the block", a);
console.log("*********************************************************");


// String operations in JS
let sFirstName = "Sachin";
let sLastName = "Tendulkar";

// Add strings
// 1
let sFullname = sFirstName + sLastName;
// 2
let sMiddleName = "Ramesh";
sFullname = sFirstName.concat(" ",sMiddleName, " ",sLastName);
console.log(sFullname);

// Length of a string
console.log(sFullname.length);

// Slice - to cut remove a part of the string
var sNewString = "Airplane";

console.log(sNewString.slice(3, sNewString.length));

// Split - to break the string in multiple pieces - it return an array
let sJointString = "Apple, Banana, Grapes, Lemon";
let splitedString = sJointString.split(", ");
console.log(splitedString);

// replace & replaceAll
var sNewString = "Hello YOURNAME YOURNAME";

console.log(sNewString.replace("YOURNAME", "Shekhar"));
console.log(sNewString.replace(/yourname/i, "Virat"));

console.log(sNewString.replaceAll("YOURNAME", "Shekhar"));
console.log(sNewString.replace(/YOURNAME/g, "Virat")); //Also works as a replace all

console.log("********************************************************");


// comman used operators
/*
    =   : assignemnt operator
    ==  : comparision operator without type check
    === : comparision operator with type check
    &   : AND
    ||  : OR
    !   : NOT
*/
if (1 == "01") {
    console.log(true, typeof(1), typeof("1"));
}


if (1 === "1") {
    console.log(true);
}else{
    console.log(false, typeof(1), typeof("1"));
}

// ARRAYS in JS
let aFruits = ["Apple", "Banana", "Grapes"];
// Push
aFruits.push("Litchi");
console.log(aFruits);
// Pop
aFruits.pop();
console.log(aFruits);

// Splice method - to add value in between
aFruits.splice(2,0, "Pinapple");
console.log(aFruits);
// Splice method - to delete
aFruits.splice(1, 2);
console.log(aFruits);

// Looping an array in Javascript
// Syntax 1:
console.log("Looping Syntax 1");
for (let i = 0; i < aFruits.length; i++) {
    const element = aFruits[i];
    console.log(element);
}

// Syntax 2:
console.log("Looping Syntax 2");
aFruits.forEach(element => {
    console.log(element);
});

console.log("************************************************");



// Functions in JS
// Named functions
// Global variable
this.nTax = 100;

// Syntax 1
let addTwoNumbers = function(a,b) {
    console.log(this.nTax ? 'Gloabl Variable accessible' : 'Globla Variable Not Accessible');
    return a + b ;
}

console.log(addTwoNumbers(10, 20));
// syntax 2 - Arrow functions
//ES6 standard -- arrow function is a new syntax for creating function

let subtractTwoNumbers = (a, b) => {
    return a - b + this.nTax;
}
console.log(subtractTwoNumbers(50, 10));
console.log("*******************************************");

// Objects if JavaScript
let oEmp = {
    "empId": 1001,
    "empName": "Shekhar",
    "salary": "50000",
    "currency": "USD"
};

// Print or change one property of object
oEmp.empId = "1010";
console.log(oEmp);

// Converting the JSON Object in String
let sObjString = JSON.stringify(oEmp);
console.log(sObjString);

// Converting the string json to JSON Object
var oEmp1 = JSON.parse(sObjString);
console.log(oEmp1);

// Looping over a object
for (const key in oEmp) {
    if (oEmp.hasOwnProperty.call(oEmp, key)) {
        const element = oEmp[key];
        console.log(element);
    }
}

// Array of Objects
var aEmployees = [
    {
        "empId": 1000010,
        "empName": "Anubhav",
        "salary": 50000,
        "currency": "AED"
    },
    {
        "empId": 1000020,
        "empName": "Rohit",
        "salary": 15000,
        "currency": "EUR"
    },
    {
        "empId": 1000030,
        "empName": "Visha",
        "salary": 80000,
        "currency": "USD"
    }
];

console.log("Salary is ======>> " + aEmployees[2].salary);





















