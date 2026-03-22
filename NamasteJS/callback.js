// What are callback function in JS?
// JS is a sync. single threaded lang.


setTimeout(
    // callback function
    () => {
    console.log("timer ")
}, 1000);

function x(y){
    console.log("x");
    y();
}

// y is callback function
x(function y(){
    console.log("y")
})