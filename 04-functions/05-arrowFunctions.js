//Arrow Functions

//Normal
function coffee(){
    console.log('coffee is good')
}

//Fat Arrow
let coffee = () => {
    console.log('fat arrow coffee');
}
coffee();

//Consise body
//Consise bodies don't need parenthesis unless you have more than one parameter     vvv
//Return is implied
//Line breaks are bad
let apples = (x,y) => console.log(`There are ${x} apples and ${y} pears.`);        //One parameter does not need parenthesis
apples(10,5)

//Block body
let apples = (x) => {  console.log(`There are ${x} apples.`); }
apples(10);
