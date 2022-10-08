import { useEffect, useContext } from 'react';
import fetchApi from '../utils/API';
import { GlobalContext } from '../context/Context';

const useFilms = () => {
  const { films, setFilms } = useContext(GlobalContext);

  const fetchFilms = async () => {
    const data = await fetchApi('/films');
    setFilms(data);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return films;
};

export default useFilms;
