// 0-promise.js

export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        resolve('Success');
    });
}
