// Function to update student grades by city
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Map the filtered students to update their grades
  return studentsInCity.map((student) => {
    // Find the new grade for the student
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Return the updated student object with the new grade or 'N/A' if not found
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}
