import { IImageGallery } from '../models';
import { ImageCard } from './ImageCard';

export const ImageGallery: React.FC<IImageGallery> = ({
  images,
  openModal,
}) => {
  const array = Object.values(images);

  return (
    <ul className="flex flex-wrap justify-center pt-2 pb-16">
      {array &&
        array.map((url, index) => {
          return <ImageCard key={index} imageUrl={url} openModal={openModal} />;
        })}
    </ul>
  );
};
