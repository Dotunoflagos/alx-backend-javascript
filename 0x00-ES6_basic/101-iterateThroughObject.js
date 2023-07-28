export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  for (const [index, employee] of reportWithIterator.entries()) {
    string += employee;
    if (index < reportWithIterator.length - 1) {
      string += ' | ';
    }
  }
  return string;
}
