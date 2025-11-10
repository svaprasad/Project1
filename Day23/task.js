// Task:

// Shopping Cart:
// •	We will have item1, item2 and discount (There are the inputs).
// •	Output should be Final Price after discount.

// Age and Country Check:
// •	Input will be Age and Country; we are allowing the age more than 18 and country’s “India” and “USA”.




        // --------task1 using addition, multiplication, percentage--------

// let itemA = 8;
// let itemB = 2;

// let total = itemA + itemB;

// const discount = total/100*30 ;

// let finalPrice = total - discount;

// console.log("FinalPrice:", finalPrice );




        // ------------Task 2 using &&,== operators------------


let Country = "India";
let Country2 = "Usa";

let Age = 23;

// if(Age>= 18 && (Country == "India" || Country == "chaina")){
//     console.log("Allowed");
// }else{
//     console.log("Not Allowed");
// }



if(Age>= 18 && (Country == "India" || Country == "Usa")){
    console.log("allowed");
}else{
    console.log("not allowed");
}

// let c = 100;
// let d = 200;

// let total = c+d;

// const discount = total/100*10;

// let finalPrice = total-discount;

// // console.log("total:", discount);
// console.log("Total:", total, "Discount:", discount, "finalPrice:",finalPrice);


 function calculateFinalPrice() {
      let item1 = Number(document.getElementById("item1").value);
      let item2 = Number(document.getElementById("item2").value);
      let discount = Number(document.getElementById("discount").value);

      let total = item1 + item2;
      let discountAmount = total * (discount / 100);
      let finalPrice = total - discountAmount;

      document.getElementById("result").innerText =
        "Final Price after discount: ₹" + finalPrice.toFixed(2);
    }



