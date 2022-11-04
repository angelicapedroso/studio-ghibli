import axios from 'axios';

const handleApi = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

const fetchApi = async (endpoint: string) => {
  const { data } = await handleApi.get(endpoint);
  return data;
};

export default fetchApi;
