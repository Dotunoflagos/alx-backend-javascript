export default function getStudentIdsSum(list) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [k, v] of items.entries()) {
    if (v === 1) {
      items.set(k, 100);
    }
  }
  return items;
}
