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
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    //static method that can only be called on the School class:
    static pickSubstituteTeacher(substituteTeachers){
        let randomNum = Math.floor(Math.random() * substituteTeachers.length)

        return substituteTeachers[randomNum];
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
//Highschool
const firstHighSchool = new High('FairBurn High School', 'high', 1650);

firstHighSchool.addSportsTeam('Lions') //adding a sports team this school instance.
console.log(firstHighSchool); //logging the school
firstHighSchool.quickFacts(); //calling the quickFacts method on the school

//Primaryschool
const lorraineHansbury = new Primary('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts(); //calling the quickFacts method on the school
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log('Your substitute teacher is: ' + sub);

//2nd HighSchool instance:
const alSmith = new High('Al E. Smith', 'high', 415);

alSmith.addSportsTeam(['Baseball', 'Basketball', 'Volleyball', 'Track and Field']); //adding an array of sport teams
console.log(alSmith); //logging the school
console.log('Your sports teams are: ' + alSmith.sportsTeam); //logging the sports teams only from the schoo


//Extra practice:
//Making a class to hold a collection of schools:
class SchoolCatalog{
    constructor(){
        this._schoolCatalog = [];
    }
    //getters:
    get schoolCatalog(){
        return this._schoolCatalog;
    }
    //method:
    addToSchoolCatalog(school){
        this._schoolCatalog.push(school);
    }
};

//Instance of school catalog:
const catalogOfPrimarySchools = new SchoolCatalog();

//Adding multiple school instances to the catalog class:
catalogOfPrimarySchools.addToSchoolCatalog(alSmith);
catalogOfPrimarySchools.addToSchoolCatalog(lorraineHansbury);
catalogOfPrimarySchools.addToSchoolCatalog(firstHighSchool);

//logging the catalog of schools:
console.log(catalogOfPrimarySchools);