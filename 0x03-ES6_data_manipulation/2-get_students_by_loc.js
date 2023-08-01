export default function getStudentsByLocation(list, city) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.filter((listItem) => listItem.location === city);
}
