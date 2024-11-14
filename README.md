# How to use this node module

> [!IMPORTANT]
> Node js must be installed on your system </br>
> Clone the repository to your project folder

Add this require statement at the top of your app.js
```
const SchoolManagement = require('./AbdulKhaliq_School.js');
```

Run this command in the terminal
```
node app.js
```


# Functions
* addInstructor
```
SchoolManagement.addInstructor(instructorName, age);
```

addInstructor(String, int) function takes in a String of instructorName and an int of age then returns the new list of instructors. An example of calling this function would be.

```
SchoolManagement.addInstructor("Joe", 30);
```

* addClass
```
SchoolManagement.addClass(className);
```

addClass(String) function takes in a String of className and returns the new list of classes. An example of calling this function would be.

```
SchoolManagement.addClass("Introduction to webapi");
```

* addStudent
```
SchoolManagement.addStudent(studentName, age);
```

addStudent(String, int) function takes in a String of studentName and an int of age then returns the new list of students. An example of calling this function would be.

```
SchoolManagement.addStudent("Max", 19);
```

* removeStudentByName
```
SchoolManagement.removeStudentByName(studentName);
```

removeStudentByName(String) function takes in a String of studentName. It then finds the index of the studentName in the student list then removes that student. It then returns the updated student list. An example of calling this function would be.    

```
SchoolManagement.removeStudentByName("Max"); //Max is an existing student
```

* getStudentbyIndex
```
SchoolManagement.getStudentbyIndex(index)
```

getStudentbyIndex(int) function takes in an int of index. It then finds the student based on the given index from the student list. It then returns the student object from the student list. An example of calling this function would be.

```
SchoolManagement.getStudentbyIndex(1); //E.g: If Max is index 1, it will return student object of Max
```


>[!NOTE]
> I have added some validation for my functions to check if the parameters passed when calling them are valid. 


<!-- You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax -->

# References
Provide the references that you have used to support your assignment. 
https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that </br>
https://www.w3schools.com/jsref/jsref_splice.asp
