console.log("welcome to DOM");
const element=document.getElementById("text");
console.log(element.innerText)

// var element2=document.getElementsByTagName("h1");
// console.log(element2[0].innerText)
// console.log(element2[1].innerText)
// console.log(element2[2].innerText)

// const element3=document.getElementsByClassName("class1");
// console.log(element3[0].innerText)
// console.log(element3[1].innerText)

// const element4=document.getElementsByTagName("h1");
// element4[2].innerText="hello world";
// console.log(element4[2].innerText)

// function him(){
//     const element4=document.getElementsByTagName("h1");
//     element4[2].innerText="hello world";
//     console.log(element4[2].innerText)
// }
// him()

function flexChange(){
    const element5=document.getElementsByClassName("container");
    element5[0].style.flexDirection="column";
    element5[0].style.borderRadius="50%";
}
// flexChange()


