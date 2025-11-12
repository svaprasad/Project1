
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
//  // convert input to number

// let grade;

console.log("Grade Calculator:");
let marks= 100;                   // change marks to see Output: Grade changing.
console.log("Taken-Marks:", marks);

if(marks >=90 && marks <=100){
            console.log("Grade: A+");
        }else if(marks >=75 && marks <=89){
            console.log("Grade: A");
        }else if(marks >=60 && marks <=74){
            console.log("Grade: B");
        }else if(marks >=45 && marks <=59){
            console.log("Grade: C");
        }else if(marks <45){
            console.log("Grade: Fail");
        }else{
            console.log("Invalid Marks");  // If you don't mention anything in marks Output: Shows invalid marks. 
        }
// ----------Task4-----------

// leap year
 
            // Year divisible by 4
            // Year not divisible by 100
            // Unless it is also divisible by 400

           let year = 2000;

            if(year % 4 === 0){
                if(year % 100 === 0){
                    if(year % 400 === 0){
                        console.log(year+ " is a Leap Year" );
                    }else{
                        console.log(year+ " is Not a Leap Year");
                    }
                } else{
                    console.log(year+ " is a Leap Year");
                }
            } else{
                console.log(year+ " is Not a Leap Year");
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




