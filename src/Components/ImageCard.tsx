import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';

import Skeleton from '@mui/material/Skeleton';
import { IImageCard } from '../models';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

export const ImageCard: React.FC<IImageCard> = ({ imageUrl, openModal }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const handleClick = () => {
    return openModal(imageUrl);
  };

  return (
    <div ref={ref} className="p-[2px] cursor-pointer">
      {inView ? (
        <Tilt
          options={defaultOptions}
          style={{
            width: 250,
          }}
        >
          <img
            className=" w-[100%] h-[260px] object-cover rounded-lg "
            src={imageUrl}
            alt="dogs"
            onClick={handleClick}
          />
        </Tilt>
      ) : (
        <Tilt
          options={defaultOptions}
          style={{
            width: 250,
          }}
        >
          <Skeleton
            variant="rectangular"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </Tilt>
      )}
    </div>
  );
};
