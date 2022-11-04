import { useEffect, useState } from 'react';
import fetchApi from '../service/api';
import { IFilm } from '../interfaces/Film';

const useFilm = (id: string | undefined) => {
  const [film, setFilm] = useState({} as IFilm);

  const fetchFilm = async () => {
    const data = await fetchApi(`films/${id}`);
    setFilm(data);
  };

  useEffect(() => {
    fetchFilm();
  }, [id]);

  return film;
};

export default useFilm;
