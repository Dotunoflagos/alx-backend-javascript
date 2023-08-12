export default function cleanSet(set, string) {
  const matchingValues = Array.from(set)
    .filter((value) => value.startsWith(string))
    .map((value) => value.substring(string.length));

  return matchingValues.join('-');
}
