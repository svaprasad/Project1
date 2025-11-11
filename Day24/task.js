
// Task:1

// · Even or Odd: Write a program to check if a number is even or odd.

// task2:

// · Age Validator:

// o “Child” if under 13

// o “Teenager” if 13-19

// o “Adult” if 20-59

// o “Senior” if 60+


// Task:3
// · Grade Calculator:

// Marks Grade

// 90-100 A+

// 75-89 A

// 60-74 B

// 45-59 C

// Below 45 Fail


// Task4:
// · Largest of Three Numbers: Take 3 values and find the largest among three numbers

// task5:

// · Leap Year Checker: Check whether a given year is a leap year




    // --------task1 js----------

//     let number = prompt("Enter a number:");

// if (number % 2 === 0) {
//   console.log(number + " is even.");
// } else {
//   console.log(number + " is odd.");
// }


// ----------task1--------


// let number = prompt("enter a number:");
let number = 34;

if (number % 2 == 0) {

    console.log(number + " is even.");
}else {
console.log(number + " is odd.");
}


// ----------Task2 js--------

let age = 14;

if(age<=13){
    console.log("child");
}else if(age>=13 && age<=19) {
    console.log("teenage");
}else if(age>=20 && age<=59) {
    console.log("adult")
}else if(age>=60){
    console.log("senior")
} else{
    console.log("Not valid");
}


// -----------tas3----------


// let marks = prompt("Enter your marks:");
marks = Number(55); // convert input to number

// let grade;

switch (true) {
  case (marks >= 90 && marks <= 100):
    grade = "A+";
    break;
  case (marks >= 75 && marks <= 89):
    grade = "A";
    break;
  case (marks >= 60 && marks <= 74):
    grade = "B";
    break;
  case (marks >= 45 && marks <= 59):
    grade = "C";
    break;
  case (marks < 45 && marks >= 0):
    grade = "Fail";
    break;
  default:
    grade = "Invalid marks";
}

console.log("Your grade is: " + grade);


// ----------Task4-----------

// leap year
let year= 1000;
 
 if (year % 4 === 0)
   if (year % 100 === 0)
      if (year % 400 === 0) {
            console.log(year + ' is a leap year');
            } else {
            console.log(year + ' is not a leap year');
            }else{
              console.log(year + ' is a leap year');

            }else{
              console.log(year + ' is not a leap year');
 
            }




                    // ----------- highest value Task5-----------

let largest;

let a = 200;
let b = 30;
let c = 40;

if(a>b && a>c ) {
    largest = a;
}else if(b>a && b>c ){
    largest = b;
}else if(c>a && c>b ){
    largest = c;
}

console.log("The largest number is: " + largest);
// console.log("a = " + a + ", b = " + b + ", c = " + c,"The largest number is: " + largest);




