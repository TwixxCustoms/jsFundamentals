// Ternaries

//Ternaries are a shorthand version of an if else if statement.

// let x = 6;
// If statement
// if(x>0) {
//     console.log('yes');
// } else {
//     console.log('no');
// };

//Ternary
// (x > 0) ? console.log('yes') : console.log('no');

//Condition statement
// if(x==0) {
//     console.log('Hello');
// } else if (x < 0) {
//     console.log('Hi')
// } else {
//     console.log('Goodbye')
// }

// Ternary Operator
let x = 6;

(x==0) ? console.log('Hello') : (x < 0) ? console.log('Hi') : console.log('Goodbye')


let age = 10;
(age > 25) ? console.log('Carl!') : (age >= 21) ? console.log('Drink!') : (age >= 18) ? console.log('Vote!') : console.log('Too young');