// console.log("Start!")

// setTimeout(function cb(){
//     console.log("Callback!")
// },5000)


// console.log("End!")

// let startDate = new Date().getTime();
// let endDate = startDate;

// while(endDate<startDate+10000){
//     endDate = new Date().getTime();
// }

// console.log("while expires!")

console.log("Start!")

setTimeout(function cb(){
    console.log("Callback!")
},0)

Promise.resolve().then(()=>{
    console.log("Hello from promise!");
})

console.log("End!")

// OP will be Start! -> End! -> Callback!



