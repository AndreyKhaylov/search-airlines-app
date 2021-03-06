const BASE_URL = 'http://localhost:3001/result/';

export const requestAPI = async () => {
  const response = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((err) => console.log('error', err));

  return response;
};
