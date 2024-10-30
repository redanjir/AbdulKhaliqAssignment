const SchoolManagement = require('./AbdulKhaliq_School.js');

console.log("Adding new Instructor");
console.log(SchoolManagement.addInstructor("bob", "asdfsdf"));
console.log('-----------------------------------------');

console.log("Adding new Student");
console.log(SchoolManagement.addStudent("Max", "asdfsd"));
console.log('-----------------------------------------');

console.log("Adding new Class");
console.log(SchoolManagement.addClass("Introduction to webapi"));
console.log('-----------------------------------------');

console.log("Removing exisitng student by name");
console.log(SchoolManagement.removeStudentByName("Joe"));
console.log('-----------------------------------------');

console.log("Get student by index");
console.log(SchoolManagement.getStudentbyIndex(1));
console.log('-----------------------------------------');
