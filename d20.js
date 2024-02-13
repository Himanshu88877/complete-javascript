// Q1. Write a JavaScript function to check whether an input is an array or not.
// function checkarray(arr){
//  if(typeof arr=="object"){
//     console.log("this is an array")
//  }

//  else{
//     console.log("this is not array")
//  }
// }
// checkarray([1,2,3,4])
// checkarray("string")

// Q2.  Write a JavaScript program that prints the elements of the following array.Note : Use nested for loops.
// let arr=[1,2,3,"string",6];
// for(let i of arr){
//     console.log(i)
// }


// Q3. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array. 
// Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];
// Expected Output : [4, 5, 8, 10, 12, 13]

// let array1=[1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];
// let array3=[];
// for(let i=0;i<array2.length;i++){
//    if(i<5){
//     res=array1[i]+array2[i]
//     array3.push(res)
//    }
//    if(i==5){
//     res=array2[i]
//     array3.push(res)
//    }
// }
// console.log(array3)


// Q4. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample Array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// let myColor = ["Red", "Green", "White", "Black"];
// let str1=myColor.join(",");
// let str2=myColor.join(",");
// let str3=myColor.join("+");
// console.log(str1)
// console.log(str2)
// console.log(str3)


// Q5. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// let output=arr1.sort();
// console.log(output)