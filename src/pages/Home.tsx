import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { getDogByBreed, getListAllBreeds } from '../API/api-service';
import { STATUS_OPTIONS } from '../CONSTANTS';
import { BreedsList, Modal } from '../Components';

export const Home = () => {
  const { PENDING, RESOLVED, REJECTED, IDLE } = STATUS_OPTIONS;
  const [breeds, setBreeds] = useState<string[]>([]);
  const [status, setStatus] = useState(IDLE);
  const [currentBreed, setCurrentBreed] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');

  const getDogsBreed = () => {
    getListAllBreeds()
      .then((res) => {
        setBreeds(res);
        setStatus(RESOLVED);
      })
      .catch((error) => {
        setStatus(REJECTED);
        console.log(error);
      });
  };
  const getDogImage = (breed: string) => {
    getDogByBreed(breed)
      .then((res) => {
        setLargeImageURL(res);
        setStatus(RESOLVED);
      })
      .catch((error) => {
        setStatus(REJECTED);
        console.log(error);
      });
  };

  const getCurrentBreed = (breed: string) => setCurrentBreed(breed);
  const closeModal = () => setLargeImageURL('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getDogsBreed(), []);

  useEffect(() => {
    if (currentBreed) {
      getDogImage(currentBreed);
      setCurrentBreed('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBreed]);
  return (
    <div className="container mx-auto">
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
        <BreedsList
          breeds={Object.keys(breeds)}
          currentBreed={getCurrentBreed}
        />
      )}
      {largeImageURL && (
        <Modal imageUrl={largeImageURL} closeModal={closeModal} />
      )}
    </div>
  );
};
