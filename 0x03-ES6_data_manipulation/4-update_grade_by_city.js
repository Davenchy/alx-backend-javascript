export default function updateStudentGradeByCity(students, city, newGrades) {
  const getGrade = (studentId) => {
    const gradeItem = newGrades.find((item) => item.studentId === studentId);
    if (!gradeItem) return 'N/A';
    return gradeItem.grade;
  };

  return students
    .filter((student) => student.location === city)
    .map((student) => ({ ...student, grade: getGrade(student.id) }));
}
