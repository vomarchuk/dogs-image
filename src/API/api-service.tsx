import axios from 'axios';
axios.defaults.baseURL = 'https://dog.ceo/api';

export const getDogsByBreed = async (breed: string) => {
  const { data } = await axios.get(`/breed/${breed}/images`);
  const result = data?.message;
  return result;
};

export const getDogByBreed = async (breed: string) => {
  const { data } = await axios.get(`/breed/${breed}/images/random`);
  const result = data?.message;
  return result;
};

export const getListAllBreeds = async () => {
  const { data } = await axios.get(`/breeds/list/all`);
  const result = data?.message;
  return result;
};
