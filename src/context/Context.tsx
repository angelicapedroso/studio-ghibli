import React, { createContext, useMemo, useState } from 'react';
import { IFilm } from '../interfaces/Film';

type PropsContext = {
  films: IFilm[];
  setFilms: React.Dispatch<React.SetStateAction<IFilm[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const DEFAULT_VALUE: PropsContext = {
  films: [],
  setFilms: () => {},
  search: '',
  setSearch: () => {},
};

export const GlobalContext = createContext(DEFAULT_VALUE);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [films, setFilms] = useState(DEFAULT_VALUE.films);
  const [search, setSearch] = useState(DEFAULT_VALUE.search);

  const memo = {
    films,
    setFilms,
    search,
    setSearch,
  };

  const value = useMemo(() => memo, [memo]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
