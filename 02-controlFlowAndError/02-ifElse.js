// IF ELSE

weather = 75;
if (weather < 70) {
    console.log('Wear a jacket')
} else {
    console.log('No jacket necessary')
};


// if (condition) {         // //IF ELSE SYNTAX
// logic
// console.log(logic)
// } else {
//     console.log(error)
// }

name = 'Xandric';
if (name == 'Xandric') {
    console.log('Hello, my name is Xandric')
} else {
    console.log('Hello, what is your name?')
};


if (name != 'Xandric') {
    console.log('Xandric')
} else {
    console.log(name)
}


if(name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters)
}



//ELSE IF
// if(condition) {
//     logic a
// } else if (different condition) {
//     logic b
// } else {
//     logic c
// }

let age = 23
if(age <= 17) {
    console.log("Sorry, you're too young to do anything.")
} else if (age >= 18 && age < 21){
    console.log("Yay! You can vote!")
} else if (age >= 21 ** age <25) {
    console.log("Yay! You can drink!")
} else if (age >= 25) {
    console.log("Yay! You can rent a car!")
}