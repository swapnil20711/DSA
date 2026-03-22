console.log("Start!")

setTimeout(function cb(){
    console.log("Callback!")
},5000)

// pushed into microtask queue
// promises and mutation observer are pushed into microtask queue
// callback queue or task queue
fetch('https://www.google.com').then(()=>{
    console.log("CB netflix!")
})
console.log("End!")