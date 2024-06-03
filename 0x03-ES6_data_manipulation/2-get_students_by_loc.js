// Function to return an array of students located in a specific city
export default function getStudentsByLocation(students, city) {
  // Use the filter function to create an array of students in the specified city
  return students.filter((student) => student.location === city);
}
