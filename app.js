const SchoolManagement = require('./AbdulKhaliq_School.js');

console.log("Adding new Instructor");
SchoolManagement.addInstructor("bob", 30);
console.log('-----------------------------------------');

console.log("Adding new Student");
SchoolManagement.addStudent("Max", "20");
console.log('-----------------------------------------');

console.log("Adding new Class");
SchoolManagement.addClass("Introduction to webapi");
console.log('-----------------------------------------');

console.log("Removing exisitng student by name & return new studentList");
SchoolManagement.removeStudentByName("Max");
console.log('-----------------------------------------');

console.log("Get student by index");
SchoolManagement.getStudentbyIndex(0);
console.log('-----------------------------------------');
