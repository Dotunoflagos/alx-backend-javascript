export default function createIteratorObject(report) {
  const names = [];
  const keys = Object.keys(report); // Array
  for (key of keys) {
    let names = report[`${key}`];
    for (employee of names) {
        names.push(employee);
    }
  }
  return names;
}
