// Function to check if all elements in the array exist within the set
export default function hasValuesFromArray(set, array) {
  // Iterate through the array and check if each element is in the set
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
