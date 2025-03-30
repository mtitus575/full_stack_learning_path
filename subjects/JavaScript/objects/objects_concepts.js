/*
Intro:
    - Objects can be assigned to VARIABLES just like any other data type.

1. What are Objects?
    - Objects are the 8th data type in JS.
    - The curly braces, {}, is used to define an Object Literal (the code block of an object)
    - It holds UNORDERED data.
    - The data is stored in key-value pairs. 
        -- Key-value pairs are called PROPERTIES.

2. Object structure/syntax.
    - The variable keyword (let, const, var) is used to link the object name with the object literal.
    - Followed by the object NAME and the = operator.
    - followed by curly braces, {} , and a semi-colon (;).
        - Inside the curly braces, you add you properties.
            - Properties are the combination of the key-value pairs.
        - Between the key and the value, you must place a colon, (:) .
        - The properties are divided a comma ( , ).

    -Example:       let spaceShip = {
                        color: 'Gray',
                        'Fuel Type': 'Jet Fuel'
                    };

3. Keys explained.
    - A key is similar to a variable name that points to a location in memory where the value is held.
    - Keys are STRINGS by default (the system stores it as a string in the background)
        -You don't need to use the quotation marks for single worded keys.
            -You can use camelcase to make multiple words into one.
        -When defining a key with a space or special character, you MUST use quotes. (examples above)

4. Values explained.
    - Values can be any data type.
    - Values that are strings must use the quotation marks to remain strings.

-----------------------------------------------------------------------------------------------

1. Accessing the Properties:

    a. There are 2 methods to access the properties. These are the dot notation (.), and the square bracket method ([]).
        i. dot notation:
            - You write the object's NAME, followed by the DOT operator and then the property name (the KEY).
                - This will then return the value of that key.
            - NOTE: If you try to access a property that does not exist, undefined is returned.

                Examples:
                    let spaceship = {
                        homePlanet: 'Earth',
                        color: 'silver'
                    };
                    spaceship.homePlanet; // Returns 'Earth',
                    spaceship.color; // Returns 'silver',

        ii. Bracket notation:
            - The bracket notation is used when the KEY is a STRING with a space, number or special character.
            - The key is placed inside the bracket.

                Example:
                    let spaceship = {
                        homePlanet: 'Earth',
                        color: 'silver'
                        "Fuel Type": 'Jet Fuel'
                    };
                    spaceship["Fuel Type"] // Returns 'Jet Fuel'
______________________________________________________________________________________________________                
 
Property Assignment:

1. All objects are mutable.
    - This means they can be updated after being created.
    - The dot or bracket notation is used to update objects.
    - The assignment operator, = , is used to add new properties or to update existing ones.

        Examples:
            spaceship.color = 'brown' // Updates the color of the above object-property.
            spaceship["Fuel Type"] = 'Vegetable oil' // Updates as above, using the bracket notation.
            spaceship.crew = 5 // Adds a new property with a key called crew and the value of 5.

    - One of 2 things can happenw with property assignment:
        a. If the property exists already, the value is replaced with the new value.
        b. If the property does not exist, a new one is added to the object.

    Note:
        - Objects declared with the const keyword CANNOT be reassigned.
        - Their PROPERTIES are still mutable!
            Meaning, you can still change, add and remove properties.
    
___________________________________________________________________________________________________

Deleting Properties:

1. The delete operator is used to remove properties.
    - To use this, you add the delete before the object-key combination.

        Example:
            const spaceship = {
                'Fuel Type': 'Turbo Fuel',
                homePlanet: 'Earth',
                mission: 'Explore the universe' 
            };
                
            delete spaceship.mission;  // Removes the mission property.

______________________________________________________________________________________________________

Methods

1. When the data stored on an object is a FUNCTION, it is called a Method.
    - A property is what an object has.
    - A method is what an object does.

2. To add a method to the object literal:
    - You still use the key-value pair syntax.
        - They key will now be the method name.
        - The value is an anonymous function expression.

            Example:
                const alienShip = {
                    invade: function () { 
                        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
                    }
                };
        
        - The function keyword and the colon can be ommited.
        - This change was implemented since ES6.
        - The method will now look like this:
             
            Example:
                const alienShip = {
                invade () { 
                    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
                }
            };

3. Invoking/calling object methods:
    - You use the object name and appending it with the dot notation, followed by the function.
        - The function is the method name and the paranthesis.

            Example:
                alienShip.invade() // Prints the message above.

_____________________________________________________________________________________

Nested Objects:

1. Nested objects means that one object has another object as it's key-value (property) pair.
    - You can have an object, in an object, that is in an object and has an array as it's final property.

Note:
    - The syntax for objects inside objects looks as folows:
        
        Example:
            let mainObjectName = {
                primaryObject1: {
                    key: 'value',
                    key: 'value',
                    method: function () {method code block}
                },

                primaryObject2: {
                    key: 'value',
                    key: 'value',
                    method: function () {method code block},
                    'Secondary Object': {
                        key: 'Value we want to access',
                        Array: []
                    }
                },

                primaryObject3: {

                }
            };

2. Accessing nested objects:
    - Nested objects can be accessed by chaining the nested properted using the dot and bracket notations.
    - This is done as follows:

        Example:
            mainObjectName.primaryObject2['Secondary Object'].key //Prints 'Value we want to access'

__________________________________________________________________________________

Pass BY Reference:

Objects are passed by reference:
    - Meaning, 
*/

