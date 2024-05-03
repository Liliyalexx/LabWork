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

console.log(isUnder25);

// Part 2: Practical Math

// Constants
const distance = 1500; // miles
const budget = 175; // dollars
const fuelCostPerGallon = 3; // dollars
const fuelEfficiency = {
    55: 30, // miles per gallon
    60: 28,
    75: 23
};

// Function to calculate fuel required
function fuel(speed) {
    return distance / fuelEfficiency[speed];
}

// Function to calculate trip duration
function trip(speed) {
    return distance / speed;
}

// Calculate fuel required and trip duration for each speed
for (let speed in fuelEfficiency) {
    const fuelRequired = fuel(speed);
    const tripDuration = trip(speed);
    const fuelExpense = fuel * fuelCostPerGallon;

    console.log(`At ${speed} mph:`);
    console.log(`  Fuel required: ${fuelRequired.toFixed(2)} gallons`);
    console.log(`  Trip duration: ${tripDuration.toFixed(2)} hours`);
    console.log(`  Fuel expense: $${fuelExpense.toFixed(2)}`);

    if (fuelExpense <= budget) {
        console.log("  Budget is enough to cover the fuel expense.");
    } else {
        console.log("  Budget is NOT enough to cover the fuel expense.");
    }
}

// const totalDistance = 1500;
// const fuelBudject = 175;
// const costFuel = 3;

// // 3How long will the trip take, in hours?
// let trip = 1500/55;
// let trip2 = 1500/60;
// let trip3 = 1500/75;
// console.log(trip, trip2, trip3);

// // Will your budget be enough to cover the fuel expense?

// let budjet1 = trip*costFuel;
// let budjet2 = trip2*costFuel;
// let budjet3 = trip3 *costFuel;
// console.log(budjet1, budjet2, budjet3);

// // How many gallons of fuel will you need for the entire trip?






