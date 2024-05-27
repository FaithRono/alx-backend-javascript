// This is the main function that returns the number of arguments passed to it
export default function returnHowManyArguments(...args) {
  // Return the length of the 'args' array, which represents the number of arguments passed to the function
  return args.length;
}