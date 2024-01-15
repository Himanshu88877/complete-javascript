// switch case 
// used when we have more than four condition 
// question 1

/* let mark=prompt("enter your marks out of 50", )
var grade;
switch(true){
    case mark>=41 && mark<=50:
    grade="A";
    break;
    case mark>=31 && mark<=40:
    grade="B";
    break;
    case mark>=21 && mark<=30:
    grade="C";
    break;
    case mark>=11 && mark<=20:
    grade="D";
    break;
    case mark>=0 && mark<=10:
    grade="E";
    break;
    default:
    grade="error"
}
console.log("your grade is", grade) */


/* let M=prompt("enter your marks out of 50", )
var G;
switch(true){
    case M>=41 && M<=50:
    G="A";
    break;
    case M>=31 && M<=40:
    G="B";
    break;
    case M>=21 && M<=30:
    G="C";
    break;
    case M>=11 && M<=20:
    G="D";
    break;
    case M>=0 && M<=10:
    G="E";
    break;
    default:
    G="error"
}
console.log("your grade is", G) */

/*
let a=parseInt(prompt("enter the value of A",));
let b=parseInt(prompt("enter the value of B",));
let c=parseInt(prompt("enter the value of C",));
let t;
switch(true){
  
       case(a>0 && a<90)&&(b>0 && b<90)&&(c>0 && c<90)&&((a+b+c)===180):
       t="triangle is acute";
       break;
       case(a>0 && a<180)&&(b>0 && b<90)&&(c>0 && c<90)&&((a+b+c)===180):
       t="triangle is obtuse";
       break;
       case(a>0 && a<90)&&(b>0 && b<180)&&(c>0 && c<90)&&((a+b+c)===180):
       t="triangle is obtuse";
       break;
       case(a>0 && a<90)&&(b>0 && b<90)&&(c>0 && c<180)&&((a+b+c)===180):
       t="triangle is obtuse";
       break;
       default:
       t="error"

}
console.log(t)
*/

let A=parseInt(prompt("enter value of A",))
let B=parseInt(prompt("enter value of B",))
let C=parseInt(prompt("enter value of C",))
if(A +B +C===180){
    if(A>90||B>90||C>90){
        console.log("triangle is obtuse")
    }
    else{
        console.log("triangle is acute")
    }
}
else{
    console.log('try again')
}