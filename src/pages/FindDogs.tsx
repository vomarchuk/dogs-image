import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Tilt } from 'react-tilt';

import { getDogsByBreed } from '../API/api-service';

import { SearchBar } from '../Components';

type StatusOptions = {
  IDLE: string;
  PENDING: string;
  RESOLVED: string;
  REJECTED: string;
};

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

const statusOptions: StatusOptions = {
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
      <Tilt
        options={defaultOptions}
        style={{ height: 250, width: 250, backgroundColor: 'tomato' }}
      >
        <p>s</p>
      </Tilt>
    </div>
  );
};
