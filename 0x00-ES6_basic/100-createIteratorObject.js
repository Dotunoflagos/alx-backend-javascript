export default function createIteratorObject(report) {
  const out = [];
  const keys = Object.keys(report); // Array
  for (key of keys) {
    let names = report[`${key}`];
    for (employee of names) {
        out.push(employee);
    }
  }
  return out;
}
