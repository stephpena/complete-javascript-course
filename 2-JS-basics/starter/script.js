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
/*
var firstName = 'Steph';
var age = 28;

// Ternary operator
age >= 21 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);


// if (age >= 21) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }


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
*/

/******************************************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', Nan
// truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// equality operators

if (height === '23') {
    console.log('The == operator does type coercion');
}
*/

/******************************************
* CODING CHALLENGE 2
*/
/*
John and Mike both play basketball but in different teams. In the latest 3 games, John's team has scored 89, 120, and 103 points, while Mike's team has scored 116, 94, and 123.

1. Calculate the average score for each team.
2. Decide which team wins on average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw.
4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
5. Like before change the scores to generate different winners, keeping in mind there may be a draw.
*/
/*
var avgJohn = (125 + 105 + 92) / 3;
var avgMike = (95 + 122 + 118) / 3;
var = avgMary = (97 + 134 + 105) / 3;


// if (avgJohn < avgMike) {
//     console.log('Mike\'s team on average scored higher with ' + avgMike);
// } else if (avgJohn > avgMike) {
//     console.log('John\'s team on average scored higher with ' + avgJohn);
// } else {
//     console.log('there is a draw');
// }


if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John\'s team on average scored higher with ' + avgJohn + ' points');
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log('Mike\'s team on average scored higher with ' + avgMike + ' points');
} else if (avgMary > avgMike && avgMary < avgJohn){
    console.log('Mary\'s team on average scored higher with ' + avgMary + ' points');
} else {
    console.log('There is a draw');
}
*/

/******************************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageSteph = calculateAge(1991);
var ageJake = calculateAge(1986);
var ageRaquel = calculateAge(1989);
console.log(ageSteph, ageJake, ageRaquel);

// DRY principle: Don't Repeat Yourself

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    retirement > 0 ? console.log(firstName + ' retires in ' + retirement + ' years')
        : console.log(firstName + ' is already retired');
}

yearsUntilRetirement(1953, 'Steph');
*/

/******************************************
* Function statements & expressions
*/
/*
// Function declaration
// function (job, firstName) {}

// Function expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches elementary';
        case 'driver' :
            return firstName + ' drives for lyft';
        case 'analyst' :
            return firstName + ' is an analyst';
        default :
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher','John'))
console.log(whatDoYouDo('analyst','Steph'))
console.log(whatDoYouDo('retired','Mark'))

// expressions: pieces of code that always produces a single value
// statements: just perform actions and does not produce immediate results. ex: if/else, while loop, and function declaration
*/

/******************************************
* Arrays
*/
// arrarys are 0 based
// Initialize new array
/*
 var names = ['Jake','Steph','Raquel'];
 var years = new Array(1986,1991,1989);

console.log(names);
console.log(names.length);

// Mutate Array Data
names[1] = 'Stephanie'
names[names.length] = 'Jessica';
console.log(names);

// Different data types
var steph = ['Steph','Peña',1991,'BI Engineer',false];
// add element to the end of the array
steph.push('mint');
// add element to the beginning
steph.unshift('Ms');
console.log(steph);
// removes last element
steph.pop();
steph.pop();
// removes first element
steph.shift();
console.log(steph);

// returns position of value in array (if not present = -1)
console.log(steph.indexOf(1991));

var isDesigner = steph.indexOf('designer') === -1 ? 'Steph is not a designer' : 'Steph is a designer';
console.log(isDesigner);
*/


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
