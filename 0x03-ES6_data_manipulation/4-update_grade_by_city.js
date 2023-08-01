export default function updateStudentGradeByCity(list, city, newGrade) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list
    .filter((listItems) => listItems.location === city)
    .map((listItem) => {
      listItem.grade = newGrade.map((gradeItem) => {
        if (gradeItem.studentId === listItem.id) {
          return gradeItem.grade;
        }
        return 'N/A';
      }).pop();

      return listItem;
    });
}
