//  Task:

//      1. Invert of right-angle triangle
//                  *
//                * *
//              * * *
//            * * * *
//          * * * * *
//      2.  Pyramid Pattern

//                *
//              * * *
//            * * * * *

//      3. Display all Products
//         colors = ["red", "green", "blue"];
//         sizes = ["S", "M", "L"];
// O/p : Red -S. Red – M, Red – L, Green-S…….



console.log("-----------Invert of right-angle triangle---------------")

for(let i=1; i<=5; i++){
    let pattern = "";
    for(let s=1; s<=5-i; s++){
        pattern += "   ";        //3 spaces for alignment

    }
    for(let j=1; j<=i;j++){

        pattern=pattern +"*  ";    //2 space for asterisk gap
    }
    console.log(pattern);
}


//Pyramid Pattern

console.log("-------------Pyramid-----------")

for(let p=1; p<=5; p++){
    let pattern1 = "";
    for(let k=1; k<=5-p; k++){
        pattern1 += "  ";               //2 spaces for alignment
    }
    for(let m=1; m<=p; m++){

        pattern1 =pattern1 +"*   ";         //3 spaces for asterisk gap
    }
    console.log(pattern1);
}


        //Display all Products

        console.log("          Display All Products:")

    let  colors = ["Red", "Green", "Blue"];     
    let   sizes = ["Small", "Medium", "Large"];

            // console.log(colors.length);       //if you remove this comment output: display array count

            for(let color of colors){
                for(let size of sizes){
                }
            }
                 console.log("        Avialable Sizes In Red:  ")

            console.log(`${colors[0]} = ${sizes[0]}`); 
            console.log(`${colors[0]} = ${sizes[1]}`);
            console.log(`${colors[0]} = ${sizes[2]}`);

                 console.log("        Avialable Sizes In Green:  ")

            console.log(`${colors[1]} = ${sizes[0]}`);
            console.log(`${colors[1]} = ${sizes[1]}`);
            console.log(`${colors[1]} = ${sizes[2]}`);

                console.log("        Avialable Sizes In Blue:  ")

            console.log(`${colors[2]} = ${sizes[0]}`);
            console.log(`${colors[2]} = ${sizes[1]}`);
            console.log(`${colors[2]} = ${sizes[2]}`);


           