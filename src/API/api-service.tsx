import axios from 'axios';
axios.defaults.baseURL = 'https://dog.ceo/api';

export const getDogsByBreed = async (breed: string, quantity: string) => {
  const amountImage = quantity === 'loadMore' ? 3 : 25;
  // console.log(amountImage);

  const { data } = await axios.get(
    `/breed/${breed}/images/random/${amountImage}`
  );
  const result = data?.message;
  return result;
};
