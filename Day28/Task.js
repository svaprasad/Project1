// Task:

// 1. Group students based on Marks

// a. Input: [40, 85, 90, 33, 72]
// b. Output:
// i. Pass: >= 40
// ii. Fail < 40.

// 2. Count how many numbers in an array are greater than 50.
// 3. Find all Prime numbers in an array
// 4. Swap the First and last element of an array
// 5. Find the second highest number in an array

// 6. Move all zeros to the end of the array
// a. Input [1,0,5,0,9], Output [1,5,9,0,0]



       // Task1 pass or fail Task

        console.log("           Pass or Fail")


let marks = [40, 85, 90, 33, 72];

let pass = marks.filter(k => k >= 40);
let Fail = marks.filter(k => k < 40);

console.log("passMarks:",pass);
console.log("FailMarks:",Fail);



//Task2. Count how many numbers in an array are greater than 50.

// const numbers = [40, 85, 90, 33, 72];

//     let count = 0;

//     for(let i=0; i<numbers.length; i++){
//         if(numbers [i] > 50)
//             count++;
//     }

//     console.log(count);
        console.log("           Above50 numbers")


    let numberss = [40, 85, 90, 33, 72,34,55,66,78,21,66];

let above50 = numberss.filter(k => k >= 50);
console.log("above50:",above50);



//Find all Prime numbers in an array


    console.log("            prime numbers")

let numbers = [10, 23, 45, 67, 89, 90, 33, 37, 50, 71, 12, 29, 4];

function isprime(num){
    if(num <= 1)
        return false;
    for(let i=2; i<= Math.sqrt(num); i++){
        if(num % i === 0)
            return false;
    }
    return true;
}
let primes = numbers.filter(isprime);
console.log("prime numbers in the array:" + primes);



//4. Swap the First and last element of an array

        console.log("             Swap first and last")


    let swap = [55,66,78,21,66,99];

    let prime = swap[0];                // store the values first
    swap[0] = swap [swap.length - 1];    // put last into first
    swap[swap.length-1] = prime;            // put stored first into last

    console.log("Swap:",swap);                  //Output


    //5. Find the second highest number in an array

    console.log("            Second Highest number");



    let nums = [40, 85, 90, 33, 72];

        let sorted = nums.sort((a,b) => a-b);

        sorted.pop();

        let secondHighestValue = sorted.pop();

        console.log(secondHighestValue);


// Move all zeros to the end of the array
// a. Input [1,0,5,0,9], Output [1,5,9,0,0] 

    console.log("           Move all zeros to the end of the array     ")


   let GivenArray = [1, 0, 5, 0, 9];

function moveZerosToEnd(arr) {

    const nonZeros = arr.filter(num => num !== 0);

    const zeros = arr.filter(num => num === 0);

    return [...nonZeros, ...zeros];
}

console.log(moveZerosToEnd(GivenArray));