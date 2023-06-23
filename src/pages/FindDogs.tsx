import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { getDogsByBreed } from '../API/api-service';
import { SearchBar, ImageGallery, Modal } from '../Components';
import { STATUS_OPTIONS } from '../CONSTANTS';

export const FindDogs = () => {
  const { PENDING, RESOLVED, REJECTED, IDLE } = STATUS_OPTIONS;
  const [searchValue, setSearchValue] = useState('');
  const [articles, setArticles] = useState<string[]>([]);
  const [status, setStatus] = useState(IDLE);
  const [largeImageURL, setLargeImageURL] = useState('');

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
    const validQuery = query.toLowerCase();
    if (searchValue === validQuery) return;
    setStatus(PENDING);
    setSearchValue(validQuery);
    setArticles([]);
  };

  const openModal = (imageUrl: string) => setLargeImageURL(imageUrl);
  const closeModal = () => setLargeImageURL('');

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    getImages(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {status === RESOLVED && (
        <ImageGallery images={articles} openModal={openModal} />
      )}
      {status === REJECTED && (
        <div className="py-10 text-center text-2xl text-red-700">
          You have entered a non-existent dog breed! Please try again
        </div>
      )}
      {largeImageURL && (
        <Modal imageUrl={largeImageURL} closeModal={closeModal} />
      )}
    </div>
  );
};
