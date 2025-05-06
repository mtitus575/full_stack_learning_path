/*
Topic: Build a Library
Brief:
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help.
They’re still using index cards to organize their content! Yikes. But no matter, you know some JavaScript, 
so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. 
In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD.

These three subclasses have the following properties and methods:
    1. Book
        1.1 Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
        1.2 Getters: all properties have a getter
        1.3 Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
    2. Movie
        2.1 Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
        2.2 Getters: all properties have a getter
        2.3 Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
    3. CD
        3.1 Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
        3.2 Getters: all properties have a getter
        3.3 Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

If you’re looking for a challenge, try to create the four classes without using the steps below.

*/
/* Step by step instructions:
    1.  Let’s start by making a parent class for our Book, CD, and Movie classes.
        Create an empty class called Media.

    2.  Inside the Media class, create an empty constructor() method that takes one parameter.
        This argument will set the one property that is in all three subclasses of Media, 
        and does not have a default value.

    3.  Inside the constructor, set the values for Media properties that Book, CD, and Movie share. 
        Prepend all of the property names with an underscore (_).

    4.  Create getters for the title, isCheckedOut, and ratings properties. 
        Each getter should return the value saved to the matching property.

    5.  Create a setter for the isCheckedOut property.

    6.  Under your getters, create a method named toggleCheckOutStatus that changes the value saved to 
        the _isCheckedOut property.
        If the value is true, then change it to false. If the value is false, then change it to true.

    7.  Under .toggleCheckOutStatus(), create a method named getAverageRating. Return the average value 
        of the ratings array.
        Use the reduce method to find the sum of the ratings array. Divide this sum by the length of the 
        ratings array, and return the result.
        Take a look at the hint if you need help with the syntax for finding the sum of the ratings array.

    8.  Let’s add a method named addRating that accepts one argument and uses .push() to add it to the 
        end of the ratings array.

    9.  Next, we’ll build a Book class that extends Media. If you feel comfortable building the Book class on 
        your own, give it a shot. If not, use the steps below to help you along the way.
        Whether you want to follow the steps or not, use the list of properties, getters, and methods as a reference.
            9.1 Book:
                Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
                Getters: all properties have a getter
                Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
                Create an empty Book class that extends Media.

    10. Inside the Book class, create a constructor that accepts three arguments. 
        These arguments are used to set properties that do not have default values.

    11. 

    12. 

    13. 

    14. 

    15. 


*/