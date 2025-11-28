// Task:

// 1. All Arithmetic operation using functions

// 2. Calculate total cart value
//  Hint: parameter we need to pass array [199, 299, 499]
//  Discount (Ex:10%)
// 3. Convert Celsius – Fahrenheit


        //addition

        console.log("            + Addition")

function add(a,b){
        return a=b;
}
let result = add(5,10);

console.log("Total:",result);

            //subtraction
            
        console.log("            - Subtraction")

function sub(a,b){
    return a-b;
}

let resultsub = sub(10,5);

console.log("Total",resultsub);


        //multiplication
        
        console.log("           *  Multiplication")

function mul(a,b){
    return a*b;
}

let mult = mul(10,10);

console.log("Total:",mult);


    //Division

    
        console.log("          /  Division")

        function Division(a,b){
            return a/b;
        }

        let resul = Division(1001,10);

        console.log("Total:",resul);
           

       //** Exponentiation

       
        console.log("            ** Exponentiation")

       function exp(a,b){
        return a**b;
       }

       let output = exp(11,3);

       console.log("Total:",output);

       // % Modulus (Remainder)

        
        console.log("             % Remainder")



       function Modulus(a,b){
        return a % b;
       }

       let display = Modulus(10,222);

       console.log("Total",display);




       //++ increment

       
       console.log("       ++ Increment")

       function incrementValue(num){
        num++;
        return num++;
       }

      //let counter = 8;
       Counter = incrementValue(8);

       console.log("Total:", Counter);

      
       //-- decrement
       console.log("        -- Decrement")


       function decrementValue (num){
        num--;
        return num;
       }

       let counter1 = 100;  

    counter1 = decrementValue(counter1);
    
    console.log("Total:",counter1);


        //method 2

//     let globalCounter = 5;

// function incrementGlobalCounter() {
//   globalCounter++;
// }

// incrementGlobalCounter(); // globalCounter is now 1
// //incrementGlobalCounter(); // globalCounter is now 2
// console.log(globalCounter); // Output: 2



 //Calculate total cart value
//  Hint: parameter we need to pass array [199, 299, 499]
//  Discount (Ex:10%)



        console.log("         calculate total cart value")

function adds(a,b,c){
    return a+b+c;
}

let results = adds(199,299,499);


console.log("Total:$",results);

let Discount = (results/100)*10;


let payableAmount = results-Discount;

console.log("discount:$",Discount,"final Value:$", payableAmount );

//console.log("discount:$",Discount)



//Convert Celsius – Fahrenheit


        console.log("          celsius-Fahrenheit")


function CelsiusToFahrenheit (Celsius){
    let Fahrenheit = (Celsius * 9/5) + 32;
    return Fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius
}

console.log(CelsiusToFahrenheit(32)); 
console.log(fahrenheitToCelsius(98)); 





let marks = 85;

if (marks >= 35) {
    console.log("Pass Buji");

    if (marks >= 75) {
        console.log("Distinction Buji!");
    }
} else {
    console.log("Fail Buji");
}


for (i=1; i<=5; i++){

    console.log("bujji" + i)
}