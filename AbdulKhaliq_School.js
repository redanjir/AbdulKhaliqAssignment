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

    /**
     * Adds a new instructor to the instructor list and returns the updated list.
     * 
     * @param {string} instructorName - The name of the instructor.
     * @param {number} age - The age of the instructor.
     * @returns {Array} The updated list of instructors.
     */
    addInstructor(instructorName, age) {
        if (isNaN(age)) { // If age is not a number
            return console.log('Error: Age is not valid');
        } else if (instructorList.find(e => e.instructorName === instructorName)) { // If instructorName already exists
            return console.log('Instructor already exists');
        } else {
            age = parseInt(age);
            var instructor = { instructorName, age };
            instructorList.push(instructor);
            return console.log(instructorList);
        }
    },

    /**
     * Adds a new class to the class list and returns the updated list.
     * 
     * @param {string} className - The name of the class.
     * @returns {Array} The updated list of classes.
     */
    addClass(className) {
        if (classList.find(e => e.className === className)) { // Check if className already exists
            return console.log('Error: ClassName already exists');
        } else {
            classList.push({ className });
            return console.log(classList);
        }
    },

    /**
     * Adds a new student to the student list and returns the updated list.
     * 
     * @param {string} studentName - The name of the student.
     * @param {number} age - The age of the student.
     * @returns {Array} The updated list of students.
     */
    addStudent(studentName, age) {
        if (isNaN(age)) { // If age is not a number
            return console.log('Error: Age is not valid');
        } else if (studentList.find(e => e.studentName === studentName)) { // Check if student already exists
            return console.log('Error: Student already exists');
        } else {
            age = parseInt(age);
            var student = { studentName, age };
            studentList.push(student);
            return console.log(studentList);
        }
    },

    /**
     * Removes an existing student by name and returns the updated student list.
     * 
     * @param {string} studentName - The name of the student to remove.
     * @returns {Array} The updated list of students without the removed student.
     */
    removeStudentByName(studentName) {
        // Finding student that matches the name in the parameters
        var foundStudent = studentList.find(student => student.studentName.toLowerCase() === studentName.toLowerCase());
        
        if (foundStudent) {
            // Return a new array/list of students without the removed student
            var newStudentList = studentList.filter(student => student.studentName.toLowerCase() !== studentName.toLowerCase());
            return console.log(newStudentList);
        } else {
            return console.log(`Error: Student not found`);
        }
    },

    /**
     * Returns the student object by index.
     * 
     * @param {number} index - The index of the student in the student list.
     * @returns {Object} The student object at the specified index.
     */
    getStudentbyIndex(index) {
        if (studentList[index] === undefined) { // If element in array does not exist
            return console.log('Error: Enter a valid index');
        }
        return console.log(studentList[index]);
    }
};

module.exports = SchoolManagement;
