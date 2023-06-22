import axios from 'axios';
axios.defaults.baseURL = 'https://dog.ceo/api';

export const getDogsByBreed = async (breed: string) => {
  const { data } = await axios.get(`/breed/${breed}/images`);
  const result = data?.message;
  return result;
};

export const getRandomImages = async () => {
  const { data } = await axios.get(`/breeds/image/random/50`);
  const result = data?.message;
  return result;
};
