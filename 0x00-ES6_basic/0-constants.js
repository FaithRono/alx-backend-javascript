// This function declares a constant 'task' with a string value and returns it
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

// This function returns a string ' is okay'
export function getLast() {
    return ' is okay';
}

// This function declares a variable 'combination' with a string value,
// appends the return value of the function 'getLast' to it,
// and then returns the resulting string
export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}