export default function getStudentIdsSum(list) {
  if (list instanceof Array) {
    return list.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent.id + curStudent.id,
      0,
    );
  }
  return 0;
}
