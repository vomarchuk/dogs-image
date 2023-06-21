import axios from 'axios';
axios.defaults.baseURL = 'https://dog.ceo/api';

export const getDogsByBreed = async (breed: string, quantity: number) => {
  const { data } = await axios.get(`/breed/${breed}/images/random/${quantity}`);

  const result = data?.message;
  return result;
};
