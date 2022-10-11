import React, { createContext, useMemo, useState } from 'react';
import { IFilm } from '../interfaces/Film';

type PropsContext = {
  films: IFilm[];
  setFilms: React.Dispatch<React.SetStateAction<IFilm[]>>;
  film: IFilm;
  setFilm: React.Dispatch<React.SetStateAction<IFilm>>;
};

const DEFAULT_VALUE: PropsContext = {
  films: [],
  setFilms: () => {},
  film: {
    id: '',
    title: '',
    original_title: '',
    image: '',
    movie_banner: '',
    description: '',
    director: '',
    producer: '',
    release_date: '',
    running_time: '',
    rt_score: 0,
  },
  setFilm: () => {},
};

export const GlobalContext = createContext(DEFAULT_VALUE);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [films, setFilms] = useState(DEFAULT_VALUE.films);
  const [film, setFilm] = useState(DEFAULT_VALUE.film);

  const memo = {
    films,
    setFilms,
    film,
    setFilm,
  };

  const value = useMemo(() => memo, [memo]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
