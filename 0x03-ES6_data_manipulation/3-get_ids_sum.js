export default function getStudentIdsSum(list) {
  if (list instanceof Array) {
    return list.reduce(
      (prevStudent, curStudent) => ({ id: prevStudent.id + curStudent.id }),
      { id: 0 }
    ).id;
  }
  return 0;
}
