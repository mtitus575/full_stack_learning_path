//Parent class:
class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    //getters:
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    //setters:
    set numberOfStudents(num){
        return this._numberOfStudents = num;
    }
    //methods:
    quickFacts(){

    }
    //static method that can only be called on the School class:
    pickSubstituteTeacher(){

    }
};

//Children classes:
//Primary school class:
class Primary extends School{
    constructor(name, level, numberOfStudents, pickUpPolicy){
        super(name, level, numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }
    //getters:
    get pickUpPolicy(){
        return this._pickUpPolicy;
    }
};

//Middle school class:
class Middle extends School{
    constructor(name, level, numberOfStudents){
        super(name, level, numberOfStudents);
    }
};

//High school class:
class High extends School{
    constructor(name, level, numberOfStudents){
        super(name, level, numberOfStudents);
        this._sportsTeam = [];
    }
    //getters:
    get sportsTeam(){
        return this._sportsTeam;
    }
    //method to add sports team:
    addSportsTeam(teamName){
        this._sportsTeam.push(teamName);
    }
};

//Instances:
const firstHighSchool = new High('FairBurn HighSchool', 'high', 1650,);
firstHighSchool.addSportsTeam('Lions')
console.log(firstHighSchool);