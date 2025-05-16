//Parent class:
class Media {
    constructor(title){
        //properties:
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
     //getters:
    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings
    }

    //setters:
    set isCheckedOut(value){
        this._isCheckedOut = value;
    }

    //methods:
    toggleCheckOutStatus(){
        if(this.isCheckedOut === true){
            this.isCheckedOut = false;
        } else {
            this.isCheckedOut = true;
        }
    }

    getAverageRating(){
        //adding all the values in the array up together.
        let ratingSum = this.ratings.reduce((accumulator, rating) => {
            accumulator + rating;
        })
        //gets the average of the sum of the array
        let averageRating = ratingSum / this.ratings.length;
        //returns the average
        return averageRating
    }

    addRating(value){
        this.ratings.push(value)
    }
};

//Child classes:
class Book extends Media {
    constructor(){

    }
};

class Movie extends Media {
    constructor(){

    }
};

class CD extends Media {
    constructor(){

    }
};

