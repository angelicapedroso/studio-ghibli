import React, { createContext, useMemo, useState } from 'react';
import { IFilm } from '../interfaces/Film';

type PropsContext = {
  films: IFilm[];
  setFilms: React.Dispatch<React.SetStateAction<IFilm[]>>;
};

const DEFAULT_VALUE: PropsContext = {
  films: [],
  setFilms: () => {},
};

export const GlobalContext = createContext(DEFAULT_VALUE);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [films, setFilms] = useState(DEFAULT_VALUE.films);

  const memo = {
    films,
    setFilms,
  };

  const value = useMemo(() => memo, [memo]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
