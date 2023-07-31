function updateStudentGradeByCity(list, city, newGrade) {
    if (!Array.isArray(list)) {
        return [];
    }
    const selected = list.filter((listItem) => listItem.location === city);
    return selected.map((listItem) => {
        let set = newGrade.map((gradeItem) => {
            if (gradeItem.studentId === listItem.id) {
                return gradeItem.grade
            } else {
                return 'N/A'
            }
        })
        if (set) {
            listItem.grade = set[0]
        }
        return listItem;
    })
}
