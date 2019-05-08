//FOR LOOPS

/*
A loop is a programming tool that repeats a set of instructions until a specified condition is met.
*/

const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//Types of looops
/*
For statememnt
Do wile statement
While statements
Labeled statements
Break statements
Continue statements                 //CTRL + C  (Stops terminal)
For in statements
For of statements
*/
// Initialization; stopping condition; iteration statement
for (let i = 0; i < 10; i++){
    console.log(i);                     //This yields the numbers 0-9
}

for (let i = 0; i <= 20; i += 2){
    console.log(i)
}

for (let i = 10; i >= 0; i --){
    console.log(i)
}

for (let i =0; i>= -24; i -=2){
    console.log(i)
}

let name = 'Xandric'
for (p=0; p< name.length;p++){
    console.log(name[p])
}

let name = 'Xandric'
let s = name.split('')
console.log(s)

let sum = 0;
for(let i = 1;i <= 50;i++){
    sum=sum+i
    console.log(sum)
}

