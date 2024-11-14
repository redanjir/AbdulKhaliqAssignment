# How to use this node module

> [!IMPORTANT]
> `Node.js` must be installed on your system </br>
> Clone the repository to your project folder

Add this require statement at the top of your app.js
```js
const SchoolManagement = require('./AbdulKhaliq_School.js');
```

Run this command in the terminal
```js
node app.js
```

## DATA
- `instructorList`: array of instructor objects
- `classList`: array of class objects
- `studentList`: array of student objects

```js
var instructorList = [
    {instructorName: 'Joe', age: 30}
];

var classList = [
    {className: 'Introduction to OOP'}
];

var studentList = [
    {studentName: 'Khaliq', age: 19}
];
```

## Functions
1. [addInstructor](#addinstructor)
2. [addClass](#addclass)
3. [addStudent](#addstudent)
4. [removeStudentByName](#removestudentbyname)
5. [getStudentbyIndex](#getstudentbyindex)

### addInstructor
```js
SchoolManagement.addInstructor(instructorName, age);
```

**Explanation**:  
`addInstructor(String, int)` function takes in a `String` of `instructorName` and an `int` of `age` then returns the updated list of instructors.

- `instructorName`: Name of the instructor (`string`)
- `age`: Age of the instructor (`int`)
- `returns`: Array of instructor objects

Example:
```js
SchoolManagement.addInstructor("Joe", 30);
```

---

### addClass
```js
SchoolManagement.addClass(className);
```

**Explanation**:  
`addClass(String)` function takes in a `String` of `className` and returns the updated list of classes.

- `className`: Name of the class (`string`)
- `returns`: Array of class objects

Example:
```js
SchoolManagement.addClass("Introduction to webapi");
```

---

### addStudent
```js
SchoolManagement.addStudent(studentName, age);
```

**Explanation**:  
`addStudent(String, int)` function takes in a `String` of `studentName` and an `int` of `age` then returns the updated list of students.

- `studentName`: Name of the student (`string`)
- `age`: Age of the student (`int`)
- `returns`: Array of student objects

Example:
```js
SchoolManagement.addStudent("Max", 19);
```

---

### removeStudentByName
```js
SchoolManagement.removeStudentByName(studentName);
```

**Explanation**:  
`removeStudentByName(String)` function takes in a `String` of `studentName`, finds the index of the student in the student list, removes that student, and returns the updated student list.

- `studentName`: Name of the student to remove (`string`)
- `returns`: Array of student objects after the student has been removed

Example:
```js
SchoolManagement.removeStudentByName("Max"); // Max is an existing student
```

---

### getStudentbyIndex
```js
SchoolManagement.getStudentbyIndex(index);
```

**Explanation**:  
`getStudentbyIndex(int)` function takes in an `int` of `index`, finds the student based on the given index from the student list, and returns the student object at that index.

- `index`: The index of the student in the list (`int`)
- `returns`: The student object at the given index

Example:
```js
SchoolManagement.getStudentbyIndex(1); // If Max is at index 1, it will return Max's student object
```

---

>[!NOTE]  
> I have added some validation for my functions to check if the parameters passed when calling them are valid.

# References
Provide the references that you have used to support your assignment. 
- https://stackoverflow.com/questions/8217419/how-to-determine-if-a-javascript-array-contains-an-object-with-an-attribute-that
- https://www.w3schools.com/jsref/jsref_splice.asp
