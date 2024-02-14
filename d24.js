// objects

// let studentrecords=[
//     {name:"mohit",id:533, marks:98},
//     {name:"rajesh",id:200, marks:45},
//     {name:"rahul",id:101, marks:75},
//     {name:"mohib",id:115, marks:23},
// ]
// quetion 1
// let arr1=studentrecords.map( x=>x.name.toUpperCase())
// console.log(arr1)
// console.log(studentrecords[1].name.toUpperCase())

// question 2
// let arr2=studentrecords.filter(x=>x.marks>50)
// console.log(arr2)

// question 3
// let arr3=studentrecords.filter(x=>x.marks>50 && x.id>120)
// console.log(arr3)

// question 4
// let res=0;
// for(let i=0;i<studentrecords.length;i++){
//     res+=studentrecords[i].marks
// }
// console.log(res)

// by reduce method 
// let x=studentrecords.reduce((accumator,cur)=> accumator+cur.marks,0)
// console.log(x)

// quetion 5
// let arr5=studentrecords.filter(x=> x.marks>50)
// let arr6=arr5.map(y=>y.name)
// console.log(arr6)

// question6
// let studentrecords=[
//     {name:"mohit",id:533, marks:98},
//     {name:"rajesh",id:200, marks:45},
//     {name:"rahul",id:101, marks:75},
//     {name:"mohib",id:115, marks:23},
// ]
// let arr6=studentrecords.filter(x=>x.id>120)
// let newarr=arr6.reduce((a,b)=>a+b.marks,0)
// console.log(newarr)

// question 7
let studentrecords=[
    {name:"mohit",id:533, marks:98},
    {name:"rajesh",id:200, marks:45},
    {name:"rahul",id:101, marks:75},
    {name:"mohib",id:115, marks:23},
]
let arr1=studentrecords.filter(x=>x.marks<50)
console.log(arr1)
let arr2=arr1.map(x=>x.marks+15)
console.log(arr2)
let arr3=arr2.filter(x=>x>50)
console.log(arr3)
let arr4=arr3.reduce((x,y)=>x+y,0)
console.log(arr4)









