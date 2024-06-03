// Function to return an array of student IDs from an array of student objects
export default function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return []; // Return an empty array if the argument is not an array
  }

  // Use the map function to create an array of student IDs
  return students.map((student) => student.id);
}
