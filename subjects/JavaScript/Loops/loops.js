//A variable containing a string that will be coverted to whale talk.
let input = 'There are nine million bicycles in beijing. That is a fact. It is a thing you cannot deny.';
//Whales only use vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
//Empty array to store the converted letters
let resultArray = [];

//a for loop to iterate over the input variable in accending order
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) { //a nested for loop to iterate over the vowels variable and compare them to the input variable. This loop iterates over the entire array for each letter that is iterated over in the input variable
    if (input[i] === vowels[j]) { //This if statement finds matches between the array and the variable
      resultArray.push(vowels[j]) //the resulting matches are then pushed into the empty array
    }
  }

   if (input[i] === 'e') { // this is statement checks for a specific letter, if found is pushes it into the empty array. 
    resultArray.push(input[i]); //Notice it's location and therefore scope. It is done before the inner loop. It therefore creates an extra enty of each searched letter
  }
   if (input[i] === 'u') {  //Same as above
    resultArray.push(input[i]); 
  }
}

//console.log(resultArray);

const resultString = resultArray.join('').toUpperCase() //A new variable is created and takes in the result array, joins the letters into one string and capetalises it.
console.log(resultString)