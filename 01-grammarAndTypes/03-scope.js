//Scope
//JavaScript has function scope
//Determines accesibility of these variables

//Variables defined inside of a function are NOT accesible from the outside
//Local and Global scope

let x = 12

function scope() {
    let x = 33
    console.log(x);
}
scope();
console.log(x);

let x = 12

function coffee(){
    x = 33
    console.log(x);
}
coffee();
console.log(x);

//Var vs Let



var x = 12

function scope() {
    var x = 33
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45
}

scope()
console.log(x); //12

var x = 12

function scope() {
    var x = 33
    if (true){
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}

scope()
console.log(x); //12

//CONST
var x = 12

function scope() {
    const x = 33
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}
