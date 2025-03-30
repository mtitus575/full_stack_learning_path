let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you',
                     'get', 'easily', 'the', 'first', 'time,', 'it', 
                     'is', 'about', 'what', 'you', 'can', 'figure', 
                     'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 
                     'JavaScript'];

//Remove the last item from the array:
secretMessage.pop();

// Log the length of the array to check previous step.
console.log(secretMessage.length);

/*  Use an array method to add the words 'to' and 'Program; as separate 
    strings to the end of the secretMessage array. */
secretMessage.push('to', 'Program');

/*  Change the word 'easily' to the word 'right' by accessing the 
    index and replacing it. */
const findWordIndex = secretMessage.indexOf('easily'); //Finds the index of the word 'easily' and stores it in a variable.
// console.log(findWordIndex); //Prints the index of the needed word

secretMessage[7] = 'right'; //completes the above objective.

/* Use an array method to remove the first string of the array. */
secretMessage.shift();

/* Use an array method to add the string 'Programming' to the beginning
of the array. */
secretMessage.unshift('Programming');

/* Use an array method to remove the strings 'get, right, the, 
first, time,', and replace them with the single string 'know,'. */
console.log(secretMessage.indexOf('get'))

secretMessage.splice(6, 5, 'know');    
/*  The line above is used to replace a group or elements with one element.
    It works by starting at the first element's index, it then takes away 5 elements 
    from that point, and finally replaces the removed section with one element */


/* On one line, use console.log() and .join() to print the secret 
message as a sentence. */
console.log(secretMessage.join(' '))
/*This method joins the individual elements togeter. 
The argument, quotes with and empty space is used to remove the commas that 
seperated the elements within the array. Without this, you still get commas after each element
depsite them being joined */
