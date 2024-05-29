function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Succcess' });
    reject(Error('The fake API is not working currently '));
  });
}
export default getResponseFromAPI;
