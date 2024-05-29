function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('Failed No API datected'));
  });
}

export default getResponseFromAPI;
