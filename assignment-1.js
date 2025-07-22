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
// 4. Sum of Natural Numbers
// let n = 10;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }

// console.log("Sum of first", n, "natural numbers is:", sum);


// //5. Factorial of a Number
// let n = 5; 
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }

// console.log("Factorial of", n, "is:", fact);

// //6. Print Multiplication Table
// let num = 5; 

// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + (num * i));
// }

// //7. Reverse a Number
// let num = 12345; 
// let reversed = 0;

// while (num !== 0) {
//   let digit = num % 10;       
//   reversed = reversed * 10 + digit;
//   num = Math.floor(num / 10);  
// }

// console.log("Reversed number is:", reversed);

// //8. Palindrome Check (Number)
// let num = 121; 
// let original = num.toString();
// let reversed = original.split('').reverse().join('');

// if (original === reversed) {
//   console.log(num + " is a palindrome.");
// } else {
//   console.log(num + " is not a palindrome.");
// }

// //9. Check Prime Number
// let num = 7; 
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(num + " is a prime number.");
// } else {
//   console.log(num + " is not a prime number.");
// }

// //10. Count Digits in a Number
// let num = 12345; 
// let count = num.toString().length;

// console.log("Number of digits in", num, "is:", count);

// //11. Sum of Digits
// let num = 1234; 
// let sum = 0;

// while (num > 0) {
//   sum += num % 10;          
//   num = Math.floor(num / 10); 
// }

// console.log("Sum of digits is:", sum);

// //12. Check Armstrong Number
// let num = 153; 
// let sum = 0;
// let digits = num.toString().length;
// let temp = num;

// while (temp > 0) {
//   let digit = temp % 10;
//   sum += Math.pow(digit, digits);
//   temp = Math.floor(temp / 10);
// }

// if (sum === num) {
//   console.log(num + " is an Armstrong number.");
// } else {
//   console.log(num + " is not an Armstrong number.");
// }

// //13. Generate Fibonacci Series
// let n = 10; 
// let a = 0, b = 1;

// console.log("Fibonacci Series:");
// for (let i = 0; i < n; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// //14. Check Vowel or Consonant
// let char = 'a'; 
// char = char.toLowerCase();

// if ("aeiou".includes(char)) {
//   console.log(char + " is a vowel.");
// } else {
//   console.log(char + " is a consonant.");
// }

// // //15. Simple Calculator
// let a = 10;
// let b = 5;
// let op = '+'; 
// if (op === '+') {
//   console.log(a + b);
// } else if (op === '-') {
//   console.log(a - b);
// } else if (op === '*') {
//   console.log(a * b);
// } else if (op === '/') {
//   console.log(a / b);
// } else {
//   console.log("Invalid operator");
// }

// //16. Find GCD (HCF)
// let a = 20;
// let b = 30;

// let gcd;

// for (let i = 1; i <= Math.min(a, b); i++) {
//   if (a % i === 0 && b % i === 0) {
//     gcd = i;
//   }
// }

// console.log("GCD of", a, "and", b, "is:", gcd);

// //17. Check Perfect Number
// let num = 28; 
// let sum = 0;

// for (let i = 1; i < num; i++) {
//   if (num % i === 0) {
//     sum += i;
//   }
// }

// if (sum === num) {
//   console.log(num + " is a Perfect Number.");
// } else {
//   console.log(num + " is not a Perfect Number.");
// }

// //18. Print All Divisors
// let num = 28; 

// console.log("Divisors of", num, "are:");

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// //19. Number is Positive, Negative or Zero
// let num = -10; 
// if (num > 0) {
//   console.log(num + " is positive.");
// } else if (num < 0) {
//   console.log(num + " is negative.");
// } else {
//   console.log("The number is zero.");
// }

// //20. Find Power (Exponentiation)
// let a = 2; 
// let b = 3; 

// let result = Math.pow(a, b);

// console.log(a + " raised to the power " + b + " is:", result);
