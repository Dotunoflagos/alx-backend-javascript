export default function createIteratorObject(report) {
  const out = [];
  const keys = Object.keys(report.allEmployees); // Array
  for (const key of keys) {
    const names = report.allEmployees[`${key}`];
    for (const employee of names) {
      out.push(employee);
    }
  }
  return out;
}
