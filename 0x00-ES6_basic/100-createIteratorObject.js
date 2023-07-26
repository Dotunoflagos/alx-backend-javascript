export default function createIteratorObject(report) {
  const out = [];
  const keys = Object.keys(report); // Array
  for (const key of keys) {
    const names = report[`${key}`];
    for (const employee of names) {
      out.push(employee);
    }
  }
  return out;
}
