import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { IFilm } from '../interfaces/Film';
import fetchApi from '../service/api';

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

  const fetchFilms = async () => {
    const data = await fetchApi('films');
    setFilms(data);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
