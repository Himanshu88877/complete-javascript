// function is a block of code which can evoke as many time as you want 

// three type of function
// 1. regular fuction 
// 2.arrow function 
// 3.function expression 

// function showmessage(){
//     alert("hello world")
// }
// showmessage()-- calling of function
// this is regular function 

// function multiply(num1,num2){ // passing variable in function is known as parameters
//     let result=num1*num2;
//     return result;
   
// }
// value of that variable during calling of function is known as arguments 
// let returnresult = multiply(4,5); // 4 and 5 are arguments.
// console.log(returnresult)
// console.log(multiply(3,5))

// const logmessage =() =>{
//     console.log('this our arrow function')
// }
// logmessage();

var name="you will be an amazing developer developer";
// var name="you will be an amazing developer huihsuidhishsdjkfh developer";
// let index=name.indexOf("developer")
let index=name.lastIndexOf("developer")
// let index=name.indexOf("will",2)
// let index=name.indexOf("will",8)
console.log(index);