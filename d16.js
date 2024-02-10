// console.log("*")
// console.log("**")
// console.log("***")
// console.log("****")
// console.log("*****")

// let num="";
// for(let i=1;i<=8;i++){
//     num+= i+" " ;
//     console.log(num)
// }
// let num="";
// let space=" "
// for(let i=1;i<=8;i++){
//     for(let )
//     space+=" ";
//     num+= "*"+" ";
//     console.log(space+num+space)
// }

//     *

//    **

//    ***

//   ****

//  *****


for(let i=0;i<5;i++){

    //spaces
    
        let str= "";
    
        for(let s=1;s<=4-i;s++){
    
            str=str+" ";
    
        }
    
     
    
        //stars
    
        for(let j=0;j<=i;j++){
    
            str=str+"*"+"  "
           
    
        }
        console.log(str)
    }
      