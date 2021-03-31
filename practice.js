//Declare a Read-Only Variable with the const Keyword

function printManyTimes(str) {

    // Only change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // Only change code above this line

}
printManyTimes("freeCodeCamp");
//Mutate an Array Declared with const

const s = [5, 7, 2];

function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // Only change code above this line
}
editInPlace();
//Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    const obj1 = Object.freeze(MATH_CONSTANTS.PI);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 3.14;
        console.log(obj1);
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => {
        return new Date();
    }
    //Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
}
console.log(myConcat([1, 2], [3, 4, 5]));
//Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

//Use the Rest Parameter with Function Parameters
const sum = (...args) => {

        return args.reduce((a, b) => a + b, 0);
    }
    //Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);
//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
//Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
//Use Destructuring Assignment to Assign Variables from Arrays
let a = 8,
    b = 6;
// Only change code below this line
[a, b] = [b, a];
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => ((max + min) / 2.0);

//Create Strings using Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // Only change code below this line

    const failureItems = [];
    for (let element of arr) {
        failureItems.push(`<li class="text-warning">${element}</li>`);
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);
//Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => ({
    // Only change code below this line

    name,
    age,
    gender

    // Only change code above this line
});
//Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(48);
console.log(bicycle.gear);
//Use class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
//Use getters and setters to Control Access to an Object
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }
    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32);
    }
    set temperature(celsius) {
        this._fahrenheit = celsius * 9.0 / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos);
//Create a Module Script
<
html >
    <
    body >
    <!-- Only change code below this line -->
    <
    script type = "module"
src = "index.js" > < /script>
    <!-- Only change code above this line -->
    <
    /body> < /
html >
    //Use export to Share a Code Block
    export const uppercaseString = (string) => {
        return string.toUpperCase();
    }

export const lowercaseString = (string) => {
        return string.toLowerCase()
    }
    //Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js'
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
//Use * to Import Everything from a File
import * as stringFunctions from './string_functions.js'
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
//Create an Export Fallback with export default
export default function subtract(x, y) {
    return x - y;
}

//Import a Default Export
import subtract from './math_functions.js'
// Only change code above this line

subtract(7, 4);
//Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {

});
//Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        // Change this line
        resolve("We got the data")
    } else {
        // Change this line
        reject("Data not received")
    }
});
//Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
}).then(result => console.log(result))

//Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});
makeServerRequest.catch(error => console.log(error))