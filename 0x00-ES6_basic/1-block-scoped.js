// This is the main function that takes a boolean parameter
export default function taskBlock(trueOrFalse) {
    // Initialize task as false
    const task = false;
    // Initialize task2 as true
    const task2 = true;
  
    // If the parameter is true, redeclare and initialize task and task2 within this block
    if (trueOrFalse) {
      const task = true; // eslint-disable-line no-unused-vars
      const task2 = false; // eslint-disable-line no-unused-vars
    }
  
    // Return the values of task and task2 as an array
    return [task, task2];
}