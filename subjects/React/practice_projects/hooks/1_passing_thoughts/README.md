##Passing Thoughts

#An app that takes user thoughts as input and displays it.

- The app allows the user to add and delete thought, list-items
--> It stores the thoughts in an array of objects.
--> Props are used to pass the info (objects, functions, etc) down from the parent.
- The app auto deletes the thoughts after 15 seconds
--> It uses useEffect() for this effect and cleansup after itself to prevent memory leaks.
