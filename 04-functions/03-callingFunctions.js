/******************
 CALLING FUNCTIONS
******************/

function hi(){
    console.log('HI')
    for (let i = 0; i < 11; i++){
        console.log(i);
    }
};
hi();


let arr = ['This', 'is', 'really', 'cool'];
function hi(){
    for(item of arr) {
        console.log(item)
    }
};
hi();


