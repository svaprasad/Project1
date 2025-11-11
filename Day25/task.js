// Tasks
// 1. Checking stock availability until quantity run out.
// 2. Sum of Number from 1 to 20.
// 3. Reverse Countdown 10 to 1.
// 4. Sum of even Number, 1 to 50.


// let stock = 10;
//  let customer = 1;

//  while (stock > 0) {   console.log("Customer " + customer + " buy 1 item");  stock = stock - 1;
//  console.log("Remaining Stock:" + stock);
//   customer++
// }







// Sum of Number from 1 to 20.

console.log("----------sum of number from 1 to 20-----------")


let n=20;
let sum = 0;

for (i=0; i<=n; i++){

  sum = sum+i;
}
console.log("count:", sum);



// Sum of even Number, 1 to 50

    console.log("-----------sum of even number----------")



let num = 50;
let even =0;

for (i=0; i<=num; i++){
    if(i%2==0){
        even = even + i;
    }
}

console.log("count:",even)





//  Reverse Countdown 10 to 1.


console.log("--------Reverse countdown--------")


let j = 10;

for(j=10; j>=1; j--){
    console.log("count:",j)
}



