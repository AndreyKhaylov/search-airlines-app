const URL = 'http://localhost:3001/result/';

export const requestAPI = async () => {
  const response = await fetch(URL)
    .then((res) => res.json())
    .catch((err) => console.log('error', err));

  return response;
};
