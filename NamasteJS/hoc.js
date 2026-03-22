function x(){
    console.log("Namaste!")
}

// y is higher order function
// x is callback fnc
function y(x){
    x();
}


const radius = [3,1,2,4];
const area = function(radius){
    return Math.PI * radius * radius
}

const perimeter = function(radius){
    return 2*Math.PI * radius
}

const calculate = (radius,logic)=>{
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius,area))
console.log(calculate(radius,perimeter))