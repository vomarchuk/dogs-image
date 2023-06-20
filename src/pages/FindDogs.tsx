import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { getDogsByBreed } from '../API/api-service';
import { SearchBar } from '../Components';

const statusOptions = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const FindDogs = () => {
  const { PENDING, RESOLVED, REJECTED, IDLE } = statusOptions;
  const [searchValue, setSearchValue] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState(20);
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState(IDLE);
  const getImages = (breed: string, quantity: number) => {
    getDogsByBreed(breed, quantity)
      .then((response) => {
        setArticles((previousState) => {
          return { ...previousState, response };
        });

        setStatus(RESOLVED);
      })
      .catch((error) => {
        setStatus(REJECTED);
        console.log(error);
      });
  };

  const handlerSearchForm = (query: string) => {
    setStatus(PENDING);
    setSearchValue(query);
  };

  const handleIncrement = () => {
    setCurrentQuantity((previousState) => previousState + 5);
  };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    getImages(searchValue, currentQuantity);
  }, [searchValue, currentQuantity]);
  return (
    <div className="container mx-auto">
      <SearchBar onSubmit={handlerSearchForm} />
      <button onClick={handleIncrement}>add</button>

      {status === PENDING && (
        <div className="flex justify-center ">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};
