// 1. Remove duplicates from the array. ex: [1,2,3,2,4,3,5]
// 2. Find the longest word. Ex: [“apple”, “banana”, “grapes”, “Watermelon”]
// 3. Convert string to array. Ex: “JavaScript is fun”


     console.log("          Remove duplicates from the array  ")

let array = [1,2,3,2,4,3,5];


let UniqueArray = [...new Set(array)];

console.log(UniqueArray);






    // Find the longest word. Ex: [“apple”, “banana”, “grapes”, “Watermelon”]

         console.log("               Largest Word")



let fruits = ["apple", "banana", "grapes", "Watermelon"];

    let largest = " ";

    for( let fruit of fruits) {
        if(fruit.length > largest.length)
            largest=fruit;
    };

    console.log("LargestWord:",largest);











// Convert string to array. Ex: “JavaScript is fun”

    console.log("               String to array")


let str = "JavaScript is fun";

let arr = str.split(" ");

console.log(arr);

