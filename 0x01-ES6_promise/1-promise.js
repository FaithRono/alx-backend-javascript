// Function that returns a promise representing a response from an API
function getFullResponseFromAPI(success) {
    // Create a new promise
    const arr = new Promise((resolve, reject) => {
      // If success is true, resolve the promise with a success message
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        // If success is false, reject the promise with an error message
        reject(new Error('The fake API is not working currently'));
      }
    });
    // Return the promise
    return arr;
  }
  
  // Export the function to make it available to other modules
  module.exports = getFullResponseFromAPI;
  