// What are first class functions?
// function statement vs expression vs declaration


// Function statement aka function declaration
function a(){
    console.log("a called")
}

//  Function expression
var b = function(){
    console.log("b called")
}

a();
b();
// Anonymous function
// function (){

// }

// named expression function
var y = function x(param1){
    console.log("b called with param : ",param1)
    console.log(x);
}
// these are params
y(function(){

});

// Diff between params and args


// First class functions -> Ability to be used as a values
// First class citizens -> 
// even if we put let,const here these behaves the same way
var xyz = function(param1){
    return function(){

    }
}

console.log(xyz())

// Arrow functions 



