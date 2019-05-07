//SWITCH

// let friend;

// switch(friend){
//     case "Tom":
//     console.log('Hey Tom, when are you going rock climbing?')
//     break;
//     case "Kenn":
//     console.log('Hey Kenn, wanna play Catan?');
//     break;
//     case "Carolyn":
//     console.log('Hey Carolyn, when are we playing DND?');
//     break;
//     default:
//     console.log(`I'm sorry, ${friend}, but do I know you?`);
// }

//String Interpolation allows us to create a placeholder for the value of the variable that we choose to assign.




let dessert = "Cake";

switch(dessert){
    case "Pie":
    console.log('Pie, pie, me oh my!')
    break;
    case "Cake":
    console.log('Cake is great.');
    break;
    case "Ice cream":
    console.log('I SCREAM FOR ICE CREAM!');
    break;
    default:
    console.log(`We don't do dessert. Fuck outta here.`);
}



let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
    console.log('worked');
    break;
    case (yep > 0):
    console.log('worked');
    break;
    default:
    console.log(`did\'t work`);
}

