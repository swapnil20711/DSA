// function x(){
//     var a = 27;
//     function y(){
//         console.log(a);
//     }

//     y();
// }

// x();

// Closure is a function bundled with it's lexical scope
// Function along with it's lexical scope is called closure

// you can pass functions inside function in js 
// you can also return functions

// function x(){
//     var a = 27;
//     function y(){
//         console.log(a);
//     }
//     a = 207;
//     return y;
// }

// var z = x();
// console.log(z);

// z();

function z() {
    var b = 900;
    function x() {
        var a = 27;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}

// y forms a closure with scope of x and z
z();

// Uses of closures
//Module design pattern
//Currying
//Functions like once
// memoize
// maintaing state in async world
//setTimeouts
//Iterators
//and many more...


// Time tide and JS waits for none
// function x will print Namaste JS! then after 3 secs i will be printed
// function x(){
//     var i = 1;
//     setTimeout(()=>{
//         console.log(i);
//     },3000);
//     console.log("Namaste JS!")
// }



// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(()=>{
//             // i is refering to same value which is being changed to 6.
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namaste JS!")
// }

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(()=>{
//             // use let as it is block scoped for each time new variable is being passed in closure
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namaste JS!")
// }


function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        // every time a new i is being passed
        close(i);
    }
    console.log("Namaste JS!")
}
x();