//do-while

let i = 0;
do{
    i++;
console.log(i)
}while(i<5);

//function

function message(){
    console.log("Hello World");
}
message(); // This is the way to call the function.


function list(firstname, lastname, age){
    return(
        `${firstname} ${lastname} is ${age} year old
    `)
}

const firstname = "himanshu";
const lastname = "gupta";
const age  = 20;

const list1 = list(firstname, lastname, age);
console.log(list1)