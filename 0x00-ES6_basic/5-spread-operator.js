// This is the main function that concatenates two arrays and a string
export default function concatArrays(array1, array2, string) {
  // Return a new array that is the result of concatenating array1, array2, and the string
  // The string is spread into individual characters
  return [...array1, ...array2, ...string];
}