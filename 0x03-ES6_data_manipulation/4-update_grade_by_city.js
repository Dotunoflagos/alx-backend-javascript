export default function updateStudentGradeByCity(list, city, newGrade) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list
    .filter((listItems) => listItems.location === city)
    .map((listItem) => {
      const listItemcopy = listItem;
      listItemcopy.grade = newGrade.map((gradeItem) => {
        if (gradeItem.studentId === listItemcopy.id) {
          return gradeItem.grade;
        }
        return 'N/A';
      }).pop();

      return listItemcopy;
    });
}
