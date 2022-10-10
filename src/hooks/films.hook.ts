import { useEffect, useContext } from 'react';
import fetchApi from '../utils/API';
import { GlobalContext } from '../context/Context';

const useFilms = () => {
  const { films, setFilms } = useContext(GlobalContext);

  const fetchFilms = async () => {
    const data = await fetchApi('films');
    setFilms(data);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return films;
};

export const useFilm = (id: string | undefined) => {
  const { film, setFilm } = useContext(GlobalContext);

  const fetchFilm = async () => {
    const data = await fetchApi(`films/${id}`);
    setFilm(data);
  };

  useEffect(() => {
    fetchFilm();
  }, [id]);

  return film;
};

export default useFilms;
