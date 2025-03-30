/*
    1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new property: colour -> "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/

// Add code below:
const myPet = {
    name: 'Sudo',
    type: 'dog',
    breed: 'Poodle',
    age: 7,
    friends: ['Bit', 'Byte', 'Data']
};

myPet.color =  'black';
myPet.breed = 'Beagle';
delete myPet.friends[2];
myPet.friends[2] = 'Chip';

console.log(myPet);