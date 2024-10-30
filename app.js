const SchoolManagement = require('./AbdulKhaliq_School.js');

console.log("Adding new Instructor");
console.log(SchoolManagement.addInstructor("bob", 30));
console.log('-----------------------------------------');

console.log("Adding new Student");
console.log(SchoolManagement.addStudent("Max", "20"));
console.log('-----------------------------------------');

console.log("Adding new Class");
console.log(SchoolManagement.addClass("Introduction to webapi"));
console.log('-----------------------------------------');

console.log("Removing exisitng student by name & return new studentList");
console.log(SchoolManagement.removeStudentByName("Max"));
console.log('-----------------------------------------');

console.log("Get student by index");
console.log(SchoolManagement.getStudentbyIndex(0));
console.log('-----------------------------------------');
