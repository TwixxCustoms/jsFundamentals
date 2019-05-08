let stringExample = 'string';
let numberExample = 0;
let boolExample = true;
let conditionExample = 0;


weather = "string";
if (typeof(weather) == "string") {
    console.log("This is a string.")
} else if (typeof(weather) == "number") {
    console.log("This is a number")
} else if (typeof(weather) == "boolean") {
    console.log("This is a boolean")
};


let value = "string";
switch(typeof(value)){
    case "string":
    console.log('This is a string')
    break;
    case "number":
    console.log('It is a number.');
    break;
    case "boolean":
    console.log('This is a boolean.');
    break;
    default:
    console.log(`Try again`);
}


let x = "number";
(typeof(x) == "number") ? console.log('This is a number.') : (typeof(x) == "string") ? console.log("This is a string.") : (typeof(x) == boolean) ? console.log("This is a boolean.") :console.log('Oops')