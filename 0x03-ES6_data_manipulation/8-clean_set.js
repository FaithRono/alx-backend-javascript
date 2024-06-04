// Function to return a string of set values that start with a specific string
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter and transform the set values
  const values = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      values.push(value.slice(startString.length));
    }
  }

  // Join the values with a hyphen separator
  return values.join('-');
}
