import { IBreedsList } from '../models';

export const BreedsList: React.FC<IBreedsList> = ({ breeds, currentBreed }) => {
  return (
    <ul className=" flex flex-wrap justify-center pt-3  pb-28 sm:pb-16">
      {breeds &&
        breeds.map((item, index) => {
          return (
            <li
              key={index}
              className="py-1 px-2 m-1 min-w-[150px] cursor-pointer bg-blue-300 hover:bg-blue-500 ease-in duration-300  rounded-lg text-center text-white "
              onClick={() => currentBreed(item)}
            >
              {item}
            </li>
          );
        })}
    </ul>
  );
};
