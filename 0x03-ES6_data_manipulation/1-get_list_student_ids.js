export default function getListStudentIds(listOfStudents) {
  if (Array.isArray(listOfStudents)) {
    return listOfStudents.map((students) => students.id);
  }
  return [];
}
