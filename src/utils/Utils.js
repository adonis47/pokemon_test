import axios from 'axios';

const url = 'https://pokebuildapi.fr/api/';

export const AxiosRequest = (method, path) => {
  const config = {
    method: method,
    url: url + path,
    headers: {
      'content-Type': 'application/json',
    },
    credentials: 'same-origin',
  };
  return axios(config);
};
