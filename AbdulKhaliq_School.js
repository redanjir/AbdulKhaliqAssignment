const { instructorList, classList, studentList} = require('./mockData.js');

const SchoolManagement = {

    //Add new instructor to list and return the new list
    addInstructor(instructorName, age){
        if(!isNaN(age)){ //If age is a number 
            age = parseInt(age);
            var instructor = {instructorName, age}
            instructorList.push(instructor);
            return instructorList;
        }else{
            return 'Error: Enter a valid age';
        }
    },

    //Add new class to list and return the new list
    addClass(className){
        classList.push({className});
        return classList;
    },

    //Add new student to list and return the new list
    addStudent(studentName, age){
        if(!isNaN(age)){ //If age is a number
            var student = {studentName, age}
            studentList.push(student);
            return studentList;
        }else{
            return 'Error: Enter a valid age';
        }
    },

    //Remove existing student by list and return the edited list
    removeStudentByName(studentName){
        var index = studentList.indexOf(studentName);
        if(index != -1){ //Indexof returns -1 if it cant find from the list
            studentList.splice(index,1);
            return studentList;
        }else{
            return 'Error: Enter an exisitng studentName';
        }
    },

    //Return the student object by index
    getStudentbyIndex(index){
        return studentList[index];
    }
}


module.exports = SchoolManagement;