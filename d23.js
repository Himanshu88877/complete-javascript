// function--in order to execute a particular line of code repetititvely , we can allocate them into a function 
// which can called again and again as per required 

// regular function 
// function multi(p1,p2){
//     console.log("hello world")
// }
// multi(arg1,arg2)//call a function(we can call multi tilme)


// arrow function
// const addition=()=>{
//   console.log("hello world")
// }
// addition();

// function expression 
// const subtraction=function(){
//     console.log("helo world")
// }
// subtraction();

// function sayHi(){
//     console.log("hiiii")
//     let a=3;
//     let b=5;
//     let result=a+b;
//     console.log(result)
// }
// sayHi();

// function addition(p1,p2){
//     let res=p1+p2;
//     return res;
// }
// console.log(addition(2,4))
// let sum=addition(5,6);
// console.log(sum)

// function multi(p1,p2){
//     let res=p1*p2;
//     return res;
// }
// console.log(multi(5,6))


// lexical environment and scope chain 
// let i=5;
// function one(){
//     console.log(i);
//     two()// because function create lexical environment
//     function two(){
//         console.log(i)
//     }
  
// }
// one()

// scope chain 
// var a=5;
// let a=5;
// const a=5;
// console.log(a)

