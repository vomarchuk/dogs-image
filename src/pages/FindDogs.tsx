import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { RotatingLines } from 'react-loader-spinner';

import { getDogsByBreed } from '../API/api-service';

import { SearchBar, ImageGallery } from '../Components';

import { STATUS_OPTIONS } from '../CONSTANTS';

export const FindDogs = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { PENDING, RESOLVED, REJECTED, IDLE } = STATUS_OPTIONS;
  const [searchValue, setSearchValue] = useState('');
  const [articles, setArticles] = useState<string[]>([]);
  const [status, setStatus] = useState(IDLE);

  const getImages = (breed: string, quantity: string) => {
    getDogsByBreed(breed, quantity)
      .then((res) => {
        // console.log('res', res);

        setArticles((prevState) => {
          // console.log('prevState', prevState);

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
    getImages(searchValue, 'load');
  }, [searchValue]);

  useEffect(() => {
    if (inView) {
      getImages(searchValue, 'loadMore');
    }
  }, [inView]);
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
      {status === RESOLVED && (
        <>
          <ImageGallery images={articles} />
          <div className="pb-[50px]" ref={ref}></div>
        </>
      )}
    </div>
  );
};
