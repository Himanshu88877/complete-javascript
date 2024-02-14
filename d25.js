// proto type 

let parent={
    fname:"kunal",
    age:25,
    Year:2023,
}
let child={
    fname:"yash",

}
child._proto_=parent;
console.log(child._proto_)//parent value
console.log(child._proto_._proto_)//object
// console.log(child._proto_._proto_._proto_)//null