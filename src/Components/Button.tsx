interface IProps {
  name: string;
  href: string;
}

export const Button: React.FC<IProps> = ({ name, href }) => {
  return (
    <a
      href={href}
      className="inline-block mx-5 w-40 px-2 py-1 rounded-md bg-white ease-in duration-300 hover:bg-slate-400 hover:text-white"
    >
      {name}
    </a>
  );
};
