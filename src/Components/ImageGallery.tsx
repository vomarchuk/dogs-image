import { IImageGallery } from '../models';

import { ImageCard } from './ImageCard';

export const ImageGallery: React.FC<IImageGallery> = ({ images }) => {
  const array = Object.values(images);

  return (
    <ul className="flex flex-wrap justify-center">
      {array &&
        array.map((url, index) => {
          return <ImageCard key={index} imageUrl={url} />;
        })}
    </ul>
  );
};
