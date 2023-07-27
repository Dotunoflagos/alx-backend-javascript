export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  for (const employee of reportWithIterator) {
    string += employee;
    if (reportWithIterator.indexOf(employee) < reportWithIterator.length - 1) {
      string += ' | ';
    }
  }
  return string;
}
