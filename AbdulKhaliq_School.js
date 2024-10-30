const { instructorList, classList, studentList} = require('./mockData.js');

const SchoolManagement = {

    //Add new instructor to list and return the new list
    addInstructor(instructorName, age){
        if(isNaN(age) ){ //If age is a not a number
            return 'Error: Age is not valid';
        }else if(instructorList.find(e => e.instructorName === instructorName)){ //If instructorname exists in array
            return 'Instructor already exists';
        }
        else{
            age = parseInt(age); //Idk if this is needed
            var instructor = {instructorName, age}
            instructorList.push(instructor);
            return instructorList;
        }
    },

    //Add new class to list and return the new list
    addClass(className){
        if(classList.find(e => e.className === className)){
            return 'Error: ClassName already exists';
        }else{
            classList.push({className});
            return classList;
        }
    },

    //Add new student to list and return the new list
    addStudent(studentName, age){
        if(isNaN(age)){ //If age is not a number
            return 'Error: Age is not valid'
        }else if(studentList.find(e => e.studentName === studentName)){
            return 'Error: Student already exists'
        }
        else{
            age = parseInt(age); //Idk if this is needed
            var student = {studentName, age}
            studentList.push(student);
            return studentList;
        }
    },

    //Remove existing student by list and return the edited list
    removeStudentByName(studentName){
        var index = studentList.indexOf(studentName);
        if(index != -1){ //Indexof returns -1 if it cant find from the list
            return 'Error: Enter an existing studentName';
        }else{
            studentList.splice(index,1);
            return studentList;
        }
    },

    //Return the student object by index
    getStudentbyIndex(index){
        if(studentList[index] === undefined){ //If element in array does not exist
            return 'Enter a valid index';
        }
        return studentList[index];
    }
}


module.exports = SchoolManagement;