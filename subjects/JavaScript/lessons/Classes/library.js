//Parent class:
class Media {
    //properties:
    constructor(title){
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }
    //getters:
    get title(){
        return this._title;
    }
    get ratings(){
        return this._ratings;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    //setters:
    set isCheckedOut(value){
        return this._isCheckedOut = value;
    }
    //methods:
    addRating(rating){
        if(rating > 0 && rating <=5){
            this._ratings.push(rating);
        } else {
            console.log('Add a rating between 1 and 5.');
        }

        
    }
    getAverageRating(){
        let ratingSum = this._ratings.reduce((accumulator, rating) => accumulator + rating);
        let averageRating = ratingSum / this._ratings.length;

        return averageRating
    }
    toggleCheckOutStatus(){
        if(this._isCheckedOut === false){
            this.isCheckedOut = true;
        } else{
            this.isCheckedOut = false;
        }
    }
};

//Children classes:
class Book extends Media{
    //properties:
    constructor(title, author, pages){
        super(title); //gives access to parent class's properties, getters, setters and methods.
        this._author = author;
        this._pages = pages;
    }
    //getters:
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages
    }
};

class Movie extends Media{
    constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    //getters:
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
};

class Cd extends Media{
    constructor(title, artist){
        super(title);
        this._artist = artist;
        this._songs = [];
    }
    //getters:
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
    //method to add songs to array:
    addSongs(song){
        this._songs.push(song);
    }
};

//Book instance:
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
historyOfEverything.toggleCheckOutStatus();
console.log('Is this book checked out? ' + historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);


//Movie instance:
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed)

//CD instance:
const firstCd = new Cd('Crazy Songs', 'Markeeza');
firstCd.addSongs('testName');
firstCd.addRating(3);
firstCd.addRating(5);
firstCd.addRating(4);
console.log(firstCd);

