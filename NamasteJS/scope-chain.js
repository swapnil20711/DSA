function a(){
    var b = 10;
    c();
    function c(){
        console.log("b in c is : ",b);
    }
}

a();
console.log(b);