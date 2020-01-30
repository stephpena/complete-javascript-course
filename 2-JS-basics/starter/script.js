/******************************************
* Variables and data types
*/
/*
var firstName = 'Steph';
console.log(firstName);

var lastName = 'Peña';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
*/

/******************************************
* Variable mutation and type coercion
*/

/*
var firstName = 'Steph';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age)

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + ' Are they married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'Driver';
alert(firstName + ' is a ' + age + ' year old ' + job + ' Are they married? ' + isMarried);

var lastName = prompt('What is her last name?');
console.log(firstName + ' ' + lastName);

*/

/******************************************
* Basic operations
*/
/*
var now, yearSteph, yearSteph, ageSteph, ageJake;
now = 2020;
ageSteph = 29;
ageJake = 34;

// Math operators
yearSteph = now - 29;
yearJake = now - 34;

console.log(yearSteph);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var stephOlder = ageSteph < ageJake;
console.log(stephOlder);

// Typeof operators
console.log(typeof stephOlder);
console.log(typeof ageJake);
console.log(typeof 'Steph is younger than Jake');
var x;
console.log(typeof x);
*/


/******************************************
* Operator precedence
*/
/*
var now = 2020;
var yearSteph = 1991;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearSteph >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageSteph = now - yearSteph;
var ageJake = 34;
var average = (ageSteph + ageJake) / 2;
console.log(average);

// Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/******************************************
* CODING CHALLENGE 1
*/
/*
Mark and John are trying to compare their BMI (Body Mass index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height)
(mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMI'switch
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from stp 3. (Something like "Is Mark's BMI higher than John's? true").
*/
/*
var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;

massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiMark, bmiJohn);

markHigherBmi = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmi);
*/


/******************************************
* if / else statements
*/
/*
var firstName = 'Steph';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married.');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married.');
}


var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;

massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

bmiMark = massMark / (heightMark ** 2);
bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiMark, bmiJohn);

// markHigherBmi = bmiMark > bmiJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmi);
if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}
*/

/******************************************
* Boolean logic
*/
/*
var firstName = 'Steph';
var age = 28;

if (age < 13) {
    console.log(firstName + ' is a pre-teen');
} else if (age >= 13 && age <= 20) { // between 13 and 20
    console.log(firstName + ' is a teen');
} else if (age > 20 && age < 30) {
    console.log(firstName + ' is a young adult');
} else {
    console.log(firstName + ' is an adult');
}
*/


/******************************************
* The Ternary Operator and Switch Statements
*/

var firstName = 'Steph';
var age = 28;

// Ternary operator
age >= 21 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 21) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch statements
var job = 'analyst';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' is a teacher');
        break;
    case 'driver':
        console.log(firstName + ' is a driver for lyft');
        break;
    case 'analyst':
        console.log(firstName + ' is an analyst');
        break;
    case 'driver':
        console.log(firstName + ' is a driver for lyft');
        break;
    default:
        console.log(firstName + ' does something else');
}


switch (true) {
    case age < 13:
        console.log(firstName + ' is a pre-teen');
        break;
    case age >= 13 && age <= 20:
        console.log(firstName + ' is a teen');
        break;
    case age > 20 && age < 30:
        console.log(firstName + ' is a young adult');
        break;
    default:
        console.log(firstName + ' is an adult');

}
