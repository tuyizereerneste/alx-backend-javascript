export default function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((inCity) => inCity.location === city);
}
