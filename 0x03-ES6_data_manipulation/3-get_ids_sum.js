export default function getStudentIdsSum(listOfStudents) {
  const sum = listOfStudents.reduce((accumulator, ids) => accumulator + ids.id, 0);
  return sum;
}
