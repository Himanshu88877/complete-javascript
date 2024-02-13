// what are objects 
// object are the collection of related data 
//  var user={
//     name:"Himanshu",
//     professional:"Teacher",
//     Hobbies:["dancing","reading"],
//  }
//  console.log(user.name)
//  console.log(user.Hobbies)

//  primitive data types -- store data of only one type.
//                        --size depend on type of data.
// non- primitive data types -- store data of more than one type. 
//                           --size is not fixed.

// cred operators
// function students(name,age,rollnumber){
//    this.name=name;
//    this.age=age;
//    this.rollnumber=rollnumber;
// }
let student1=["himanshu",23,13456]
let student2=["HIMANSHU",21,13456]
let student3=["vasu",54,1309856]
let student4=[...student1,...student2,...student3]//similar to concat mrthod
console.log(student4)