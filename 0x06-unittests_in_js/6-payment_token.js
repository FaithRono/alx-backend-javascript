// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            reject(); // Explicitly reject the promise for failure cases
        }
    });
}

module.exports = getPaymentTokenFromAPI;
