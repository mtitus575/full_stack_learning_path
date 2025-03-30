// Team stats challenge Project: Objects

/* Project Intro:
We want to create, retrieve, and add information about your favorite sports team. 
Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
 */

    /* Instructions:
        1.  Let’s make a data structure to store the information about our team. Declare a const variable called team and set it to an empty object.

        2.  Our team has players and the games that they have played. Let’s represent both of these by adding two properties to your team object. 
            Add a _players property and a _games property and initialize both to empty arrays.
        
        3.  Next, populate the empty_players array with three players. 
            Each newPlayer should be an object containing three properties: firstName, lastName, and age. 
            Put each newPlayer on a new line to prevent the line from getting too long.

        4.  Let’s do the same for our _games array. Populate the empty array with three games. 
            Each newGame should be an object containing three properties: opponent, teamPoints, opponentPoints.

        Getting Data:
        5.  Create a getter method called 'players' to retrieve the _players property. Inside the getter method, return the _players property.
            For the scope of this project, we won’t need to create setter methods, because we don’t want anyone to change the data saved to the properties.

        6.  Create another getter method called games to retrieve the _games property. Inside the getter method, return the _games property.

        Adding Data:
        7.  We want to add a new newPlayer to our team. Add a .addPlayer() method to the team object. 
            This method should take in three parameters: newFirstName, newLastName, and newAge.
            Inside the method, create a 'newPlayer' object and setting the three parameters to be the values for the object’s three properties: firstName, lastName, age. 
            Finally, add the newPlayer object to the team‘s _players array.
        
        8.  Below the team object, let’s try out our new .addPlayer() method to add a new newPlayer: Bugs Bunny, age 76.
            Log the team‘s _players property to check that our new newPlayer was added.

        9.  The scorekeeper has some new information for us! Create a method for adding newGame results called 
            addGame that takes three parameters: newOpponent, newTeamPoints, newOpponentPoints.
            Inside the .addGame() method, create a newGame object by setting the three parameters to be the values for the 
            object’s three properties: opponent, teamPoints, opponentPoints. Add the newGame object to the team‘s _games array.

        10. Finally, below our team object, use the .addGame() method to add a record of a new newGame. 
            Our team played against the 'Titans' where we scored 100 points and the opponent scored 98 points.
            Log the team‘s _games property to check that our new newGame record was properly added.
    */

//Add code below:
// a Object called team that has 2 properties (_players, _games), 2 getters (players, games), and 2 methods (addPlayer(), and addGame())
const team = {
    _players: [ //The value of this property is an array.
        {firstName: 'Jack', lastName: 'Daniels', age: 99}, // The array holds 3 objects
        {firstName: 'John', lastName: 'Travolta', age: 43}, // Each object has 3 of their own properties
        {firstName: 'James', lastName: 'Bond', age: 32}
    ],
    _games: [ //The structure is the same as above
        {opponent: 'Reds', teamPoints: 50, opponentPoints: 70},
        {opponent: 'Blues', teamPoints: 49, opponentPoints: 93},
        {opponent: 'Eagles', teamPoints: 1, opponentPoints: 38}
    ],
    //getters are used to return the properties and the array of object they contain
    get players() { 
        return this._players;
    },
    get games() {
        return this._games;
    },

    //These methods add functionality to the code. 
    //It allows us to add new players with 3 arguments. This will become a new Object and the keys below will be filled with values (the arguments)
    addPlayer(newFirstName, newLastName, newAge) {
        let newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(newPlayer); //This line is used to add the newly created newPlayer object to the team's array of objects
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
        let newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(newGame);
    }

};
team.addPlayer('Bugs', 'Bunny', 76) //Adds a new newPlayer using the method on the team object
console.log(team.players)
team.addGame('Titans', 100, 98); //Adds a new newGame using the method on the team object
console.log(team.games)