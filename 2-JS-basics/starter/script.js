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
