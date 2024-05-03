//Part 1
// --------------------------------------------
// --------------------------------------------

// Initial Numbers to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//Do numbers add to 50? True/False

const isSum50 = (num1 + num2 + num3 + num4) === 50;

console.log("Is the sum 50?", isSum50);

//Are at least 2 numbers odd? True/false
const areTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2

console.log(`Are there two or more odd numbers?`, areTwoOdd);

//No numbers can be larger than 25 

const areLargerThan25 = num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25;

console.log(`Are any numbers over 25`, areLargerThan25);

//Are all numbers unique

const isUnique= num1 != num2 && num1 != num3 && num1 != num4 && num2!= num3 && num3 != num4;

console.log(`Are all numbers are unique?`, isUnique);

//Did the numbers pass the validation checks?
const isValid = isSum50 && areTwoOdd && !areLargerThan25 && isUnique;
console.log(`do the numbers pass all checks`,isValid );

//Check if all numbers are divisible by 5. Cache the result in a variable.
const divisibleBy5 = (num1 % 5) + (num2 % 5) + (num3 % 5) + (num4 % 5)==0;

console.log(`Are numbers divisible by 5`, divisibleBy5);

//Check if the first number is larger than the last. Cache the result in a variable.
const firstLargerlast = num1 > num4;

console.log( "first number is larger than the last", firstLargerlast);


// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

console.log(num1, num2, num3, num4);
console.log(((num2-num1)*num3)%num4);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let isUnder25  = num1<25 || num2 < 25 || num3 < 25|| num4 < 25;

// Part 2: Practical Math




