//Variables
//Variables are containers for storing data vaules (words, sentences, numbers, objects, etc);

var a = 1;
var b = 2;
console.log(a + b);

/* Notes:
1. A variable must begin with a letter, underscore, or dollar sign
2. Numbers can follow the above characters, but cannot come first
3. Javascript is case sensitive -- "Hello" and "hello" are different names
4. Variables must be identified with unique names\
*/

var x;
console.log("Declaration:", x)

x = 10
console.log('Initialization 1:', x)

x=33;
console.log('Initialization 2:', x)

var y = 'Hello';
console.log('Both', x, y)

//Var, Let (new), and Const;

//Var = 'old' keyword
//Let = 'new' keyword
//Const = also 'new' keyword; declares unchangeable variables

var today = 'great!';
const elevenfifty = 'wonderful';
console.log(today + elevenfifty);

var today = 'lovely';
console.log(today + elevenfifty);

elevenfifty = 'super';
console.log(today, elevenfifty);
