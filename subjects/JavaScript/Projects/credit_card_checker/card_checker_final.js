// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8,];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const testInvalidLength = [3, 4, 5, 9]
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
//Instruction 2:
const validateCred = arr => {
    const checkArray = arr.slice(); //creates a shallow copy of the array to be checked. This step prevents mutating the original
    let doubledNums = []; //will hold numbers to be doubled
    let notDoubled = []; //holds the rest of the numbers that are not douubled
    const checkDigit = checkArray.slice(-1); //holds the check digit. This number is not doubled in the luhn algorithm
    let finalArray = []; //to store both doubled and non doubled nums and then sum them

    // This step checks the length of the card first. If the length is invalid, it returns false.
    if (arr.length < 13 || arr.length > 19) return false; // Check for typical credit card length


    for(let i=checkArray.length-2; i >= 0; i -=2) { //Loops through every 2nd element, starting with the one before the check digit
        checkArray[i]*=2; //Doubled each of the alternate elements

        if(checkArray[i] > 9) { 
            doubledNums.push(checkArray[i]-9); //subtracts 9 from each element that is bigger than 9 after doubling. It then pushes that result into the holding array
        } else {
            doubledNums.push(checkArray[i]); // pushes numbers that are less than 9 directly into the holding array
        }
    } //return doubledNums //not needed here. only one return can be used 

    for(let j = checkArray.length-3; j>=0; j-=2) { //loops through every other element starting at the 3rd from rear element
        notDoubled.push(checkArray[j]); //pushes the elements into this holding array
    } //return notDoubled //not needed here. only one return can be used 
    
    finalArray = doubledNums.concat(notDoubled).concat(checkDigit); //This step takes all the part of the array that was worked with above and concatenates it into the final array
    const sumOfNums = finalArray.reduce((accumulator, currentValue) => accumulator + currentValue); // Sums the array up and assigns the result to a new variable

    //This if statement will return a result based on the summed value modulo by 10.
    if (sumOfNums % 10 === 0) {
        return true; //true here means the card is valid
    } else {
        return false; //false here means the card is invalid
        }
};
//This is the function call:
    // validateCred(valid1);
//Allows me to see what the function does in the console.
    //console.log(validateCred(testInvalidLength)); 

//Instruction 3:
const invalidCardsArray = []; //this array will store the invalid arrays. Placed in global scope - allows other functions to also access this variable.

//this function returns a nested array of invalid numbers.
const findInvalidCards = nestedArr => {
    //let invalidCardsArray
    // = []; //this array will store the invalid arrays

    for(let x = 0; x < nestedArr.length; x++) { //loops through the nested arrays
        if(validateCred(nestedArr[x]) === false) { //calls the function that validates the cards and checks if it returns false
            invalidCardsArray
        .push(nestedArr[x]); //pushes the arrays that evaluates to false into the variable to hold nested arrays of incorrect cards
        } 
    } 
    return invalidCardsArray
 // returns the array or arrays. Notice the location of the return. It is scoped after the for loop to return all of the iterations.
};
findInvalidCards(batch) //calls the function above.
// console.log(invalidCardsArray) // checks to ensure the global variable that holds the nested arrays are correct.


//Instruction 4:
const idInvalidCardCompanies = nestedArr => {
    let inValidCardCompanies = [];
    let companies = [];

    nestedArr.forEach(function(num) {
        inValidCardCompanies.push(num[0]); //pushes each of the first elements within the nested array into the variable - making a new array of only the first numbers of the invalid cards
            // console.log(num[0])
    });
    // return inValidCardCompanies // this return should not be here as it will stop the rest of the code from runnnig- used to check the function at this point only
    
    inValidCardCompanies.forEach(function(digit){
        switch (digit) {
            case 3: companies.push('Amex');
            break;
            case 4: companies.push('Visa');
            break;
            case 5: companies.push('MasterCard');
            break;
            case 6: companies.push('Discover');
            default: 'Company not found'
        }
    });
    // return companies; // this return should not be here as it will stop the rest of the code from runnnig- used to check the function at this point only

    const removedDuplicates = companies.filter(function(item, index, arr){
        return arr.indexOf(item) === index
    });

    return removedDuplicates;
    
};
console.log(idInvalidCardCompanies(invalidCardsArray)); // calls and logs the function to console
// idInvalidCardCompanies(invalidCardsArray) //calls the function without logging


// The below code will take any string input and convert it to a valid array of numbers for the validating process.
const convertToArray = string => {
    return string.split('').map(Number)
};

let numString = '12345678999' //This variable was used to test the conversion function.

// console.log(convertToArray(numString)) //calls the conversion function.