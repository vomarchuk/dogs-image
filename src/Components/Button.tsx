import { INavButton } from '../models';
export const Button: React.FC<INavButton> = ({ name, href }) => {
  return (
    <a
      href={href}
      className="inline-block mx-5 w-40 px-2 py-1 rounded-md bg-white ease-in duration-300 hover:bg-slate-400 hover:text-white"
    >
      {name}
    </a>
  );
};
