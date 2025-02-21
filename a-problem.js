//Problem

//create an array with 5 students names,after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user "studentName"

const studentDatabase = ["jordan", "erick", "john", "michel"];

const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};

findStudent(studentDatabase, 'erics')
//hahahahasowjzsziwwizjssujwxsiexis
