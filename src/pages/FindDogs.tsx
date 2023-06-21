import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { getDogsByBreed } from '../API/api-service';

import { SearchBar, ImageGallery } from '../Components';

import { STATUS_OPTIONS } from '../CONSTANTS';

export const FindDogs = () => {
  const { PENDING, RESOLVED, REJECTED, IDLE } = STATUS_OPTIONS;
  const [searchValue, setSearchValue] = useState('');
  const [articles, setArticles] = useState<string[]>(['']);
  const [status, setStatus] = useState(IDLE);

  const getImages = (breed: string, quantity: number) => {
    getDogsByBreed(breed, quantity)
      .then((res) => {
        setArticles((prevState) => {
          return { ...prevState, ...res };
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

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollHeight - scrollTop === clientHeight) {
      // getImages(searchValue, 3);
      setArticles((prevState) => {
        console.dir(prevState);
        return [...prevState, '4:sdasdadas'];
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (searchValue === '') {
      return;
    }

    getImages(searchValue, 15);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
