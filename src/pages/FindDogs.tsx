import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { getDogsByBreed } from '../API/api-service';

import { SearchBar, ImageGallery } from '../Components';

import { STATUS_OPTIONS } from '../CONSTANTS';

export const FindDogs = () => {
  const { PENDING, RESOLVED, REJECTED, IDLE } = STATUS_OPTIONS;
  const [searchValue, setSearchValue] = useState('');
  const [articles, setArticles] = useState<string[]>([]);
  const [status, setStatus] = useState(IDLE);

  const getImages = (breed: string) => {
    getDogsByBreed(breed)
      .then((res) => {
        setArticles((prevState) => {
          return [...prevState, ...res];
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

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    getImages(searchValue);
  }, [searchValue]);

  return (
    <div className="container mx-auto">
      <SearchBar onSubmit={handlerSearchForm} />
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
      {status === RESOLVED && <ImageGallery images={articles} />}
    </div>
  );
};
