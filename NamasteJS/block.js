// if(true){
//     // Compound Statement
//     var a = 10;
//     console.log(a);
// }

var a = 100;
let b = 100;
const c = 200;
{
    var a = 10;
    let b = 20;
    const c =30;

    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(a)
console.log(b)
console.log(c)


function x(){
    const c =150;
    console.log(`c in function is ${c}`);
}

x();




// illegal shadowing can shadow let y with let y only
// let y = 100;
// {
//     var y = 20;
// }

let y = 100;
function hello(){
    var y = 20;
}

// var y = 100;
// {
//     let y = 20;
// }