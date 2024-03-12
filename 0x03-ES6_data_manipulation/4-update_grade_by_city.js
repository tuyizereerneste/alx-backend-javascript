export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const updatedStudents = listOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      let grade;
      if (gradeObject) {
        grade = gradeObject.grade;
      } else {
        grade = 'N/A';
      }
      return { ...student, grade };
    });
  return updatedStudents;
}
