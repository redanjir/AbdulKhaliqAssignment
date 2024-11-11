var instructorList = [
    {instructorName: 'Joe', age: 30}
];

var classList = [
    {className: 'Introduction to OOP'}
];

var studentList = [
    {studentName: 'Khaliq', age:19}
];


const SchoolManagement = {

    //Add new instructor to list and return the new list
    addInstructor(instructorName, age){
        if(isNaN(age) ){ //If age is a not a number
            return console.log('Error: Age is not valid');
        }else if(instructorList.find(e => e.instructorName === instructorName)){ //If instructorname exists in array
            return console.log('Instructor already exists');
        }
        else{
            age = parseInt(age); 
            var instructor = {instructorName, age}
            instructorList.push(instructor);
            return console.log(instructorList);
        }
    },

    //Add new class to list and return the new list
    addClass(className){
        if(classList.find(e => e.className === className)){
            return console.log('Error: ClassName already exists');
        }else{
            classList.push({className});
            return console.log(classList);
        }
    },

    //Add new student to list and return the new list
    addStudent(studentName, age){
        if(isNaN(age)){ //If age is not a number
            return console.log('Error: Age is not valid');
        }else if(studentList.find(e => e.studentName === studentName)){
            return console.log('Error: Student already exists');
        }
        else{
            age = parseInt(age); 
            var student = {studentName, age}
            studentList.push(student);
            return console.log(studentList);
        }
    },

    //Remove existing student by name and return the edited list
    removeStudentByName(studentName){

        //Finding student that matches the name in the params
        var foundStudent = studentList.find(student => student.studentName.toLowerCase() === studentName.toLowerCase());
        
        if(foundStudent){
            //Return a new array/list of students without the studentname 
            var newStudentList = studentList.filter(student => student.studentName.toLowerCase() != studentName.toLowerCase());
            return console.log(newStudentList);
        }else{
            return console.log(`Enter an existing student name`);
        };
   
     
    },

    //Return the student object by index
    getStudentbyIndex(index){
        if(studentList[index] === undefined){ //If element in array does not exist
            return console.log('Enter a valid index');
        }
        return console.log(studentList[index]);
    }
}


module.exports = SchoolManagement;
