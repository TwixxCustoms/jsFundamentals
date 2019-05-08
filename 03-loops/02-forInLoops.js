//  FOR IN LOOPS

//Great for iterating over values in an object
//The For in statement iterates a specified variable over all the enumerable properties of an object.

let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1 };
for(item in student){
    //console.log('item =>', item);   //name awesome degree week
    console.log('student[item] =>', student[item]);
}

let dogArray = ['collie','pitbull','newfie','st bernard','dachshund'];
for (dog in dogArray){
    console.log(dog)
}

let catArray = ['tabby', 'british shorthair','burmese','maine coon','rag doll'];
for (cat in catArray) {
    console.log(cat)
}

let studentName = "xandric";
let capName;
for (let n in studentName){
    if (n==0){
        capName = studentName[n].toUpperCase();
    }else{
        capName += studentName[n].toLowerCase()
    }
}
console.log(capName)


const name = 'xandric'
const nameCapitalized = name.charAt(0).toUpperCase(name) + name.slice(1)
console.log(nameCapitalized)