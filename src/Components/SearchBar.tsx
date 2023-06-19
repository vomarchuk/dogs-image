import { useState } from 'react';

export const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const hundleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget?.value);
  };

  const hundleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <header className="flex bg-slate-500 py-3 px-6 justify-center">
      <form
        className="flex max-w-lg w-[100%] bg-white items-center overflow-hidden rounded-sm"
        onSubmit={hundleSubmit}
      >
        <button
          className="inline-block w-12 h-12 bg-slate-200 ease-in duration-300 hover:bg-slate-400 bg-[url('./images/search.png')] bg-[length:40%] bg-no-repeat bg-center opacity-60 "
          type="submit"
        >
          <span className="absolute w-[1px] h-[1px] p-0 overflow-hidden ">
            search
          </span>
        </button>
        <input
          className="inline-block text-sm border-none outline-none px-1 w-[100%]"
          type="text"
          placeholder="Search images"
          onChange={hundleChange}
        />
      </form>
    </header>
  );
};
