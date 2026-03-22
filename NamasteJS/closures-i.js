// function outset(){
//     var c =20;
//     function outer(b){
//         function inner(){
//             console.log(a,b,c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// var close = outset()("hello world!");
// close();

// advantages of closures
//currying,hoc
//data hiding and encapsulation

function Counter() {
    var count = 0;

    this.incrementCounter =  function() {
        count++;
        console.log(count);
    }

    this.decrementCounter =  function() {
        count--;
        console.log(count);
    }
}

// var counter1 = counter();
// counter1();
// counter1();
// counter1();

// var counter2 = counter();

// counter2();
// counter2();

var counter1 = new Counter();
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()

// disadvantages
// overconsumption of memory as variables are not garbage collected and it can lead to memory leaks


