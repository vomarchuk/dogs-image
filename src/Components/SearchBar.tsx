import { useState } from 'react';
import { toast } from 'react-toastify';
import { IOnSubmit } from '../models';

export const SearchBar: React.FC<IOnSubmit> = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.currentTarget?.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      return toast('Enter dog breeds');
    }
    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <header className="flex bg-blue-300 py-3 px-6 justify-center">
      <form
        className="flex max-w-lg w-[100%] bg-white items-center overflow-hidden rounded-sm"
        onSubmit={handleSubmit}
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
          value={searchValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
