# How to use this node module

> [!IMPORTANT]
> First run the node module in the terminal in the base folder

```
node app.js
```

# Functions
## addInstructor
```
addInstructor(instructorName, age)
```

addInstructor(String, int) function takes in a String of instructorName and an int of age then returns the new list of instructors. An example of calling this function would be.

```
addInstructor("Joe", 30);
```

## addClass
```
addClass(className)
```

addClass(String) function takes in a String of className and returns the new list of classes. An example of calling this function would be.

```
addClass("Introduction to webapi");
```

## addStudent
```
addStudent(studentName, age)
```

addStudent(String, int) function takes in a String of studentName and an int of age then returns the new list of students. An example of calling this function would be.

```
addStudent("Max", 19);
```

## removeStudentByName
```
removeStudentByName(studentName)
```

removeStudentByName(String) function takes in a String of studentName. It then finds the index of the studentName in the student list then removes that student. It then returns the updated student list. An example of calling this function would be.

```
addStudent("Max"); //Max is an existing student
```

## getStudentbyIndex
```
getStudentbyIndex(index)
```

getStudentbyIndex(int)function takes in a int of index. It then finds the student based on the given index from the student list. It then returns the student object from the student list. An example of calling this function would be.

```
addStudent(1); //E.g: If Max is index 1, it will return student object of Max
```

<!-- You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax -->

# References
Provide the references that you have used to support your assignment. 
https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that
https://www.w3schools.com/jsref/jsref_splice.asp