export default function createIteratorObject(report) {
  const names = [];
  const keys = Object.keys(report); // Array
  keys.forEach((department) => {
    report[department].forEach((name) => {
      names.push(name);
    });
  });
  return names;
}
