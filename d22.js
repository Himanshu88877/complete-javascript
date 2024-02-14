// object can created by two methods--'
// 1.class constuctor
// 2.function constuctor

//  creat object by function constuctor 
// function car(make,modal ,year){
//     this.make=make;//this refer to car 
//     this.modal=modal;
//     this.year=year;
// }
// let car1 = new car("eagle","talontsi",1993);//new keyward declare new object
// console.log(car1)

//  creat object by class constuctor 
// class rectangle{
//     constructor(height,width){
//         this.height=height;
//         this.width=width;
//     }
// }

// const obj=new rectangle(10,30);
// console.log(obj)


// question1 
// function obj(name){
//     this.name=name;
// }

// let obj1=new obj("himanshu");
// console.log(obj1.name)

// Q7. Find the sum of Object Members
function sum(p1,p2,p3){
    this.p1=p1;
    this.p2=p2;
    this.p3=p3;
}
let sum1=new sum(10,12,18)
console.log(sum1.p1+sum1.p2+sum1.p3)


// Q8. Check whether the Objects are same or not
function check(name,id){
    this.name="himanshu";
    this.id=23;
    // if((this.name==name)&&(this.id==id)){
    if((this.name=="himansu")&&(this.id==23)){
        console.log("true")
    }else(
        console.log("false")
    )
}
let obj=new check("vasu",67)
console.log(obj)

// Q6. Object Multiplyer
function mul(num,id,hno){
    this.id=num*id;
    this.hno=num*hno;
}
let obj1=new mul(2,24,146)
console.log(obj1)