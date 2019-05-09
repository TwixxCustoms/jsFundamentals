//parameters are values that we want to put in out function (They go in parenthesis)

function hi(parameter1, parameter2){
    console.log(parameter1, parameter2)
    console.log('HI')
}

function pet(animal){
    console.log(`I have an ${animal} for a pet.`);
}
                      //Replaces animal with animal type
pet('cat');
pet('dog');
pet('turtle');



function name(fName, lName){
    let fullName = fName +' ' + lName;
    console.log(`Hello, my name is ${fullName}.`);
}
name('Hesson,', 'Xandric');
