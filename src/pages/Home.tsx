import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { getRandomImages } from '../API/api-service';
import { STATUS_OPTIONS } from '../CONSTANTS';
import { ImageGallery } from '../Components';

export const Home = () => {
  const { PENDING, RESOLVED, REJECTED, IDLE } = STATUS_OPTIONS;
  const [articles, setArticles] = useState<string[]>([]);
  const [status, setStatus] = useState(IDLE);

  console.log(articles);

  const getImages = () => {
    getRandomImages()
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

  useEffect(() => {
    getImages();
  }, []);
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
      {status === RESOLVED && <ImageGallery images={articles} />}
    </div>
  );
};
