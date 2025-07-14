////1. Check Even or Odd
// const n = 7

// if(n%2)
// {
//     console.log("Odd Number")
// }else
// {
//     console.log("Even Number")
// }

// 2. Find the Maximum of Two Numbers

// let a = 5;
// let b = 9;

// if (a > b) {
//   console.log(a);  
// } else {
//   console.log(b);
// }

//3. Check Leap Year

let year = 2020; 


if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
{
    console.log(year + " is a Leap Year.");
} else {
    console.log(year + " is not a Leap Year.");
}