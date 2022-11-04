import { useEffect, useState } from 'react';
import fetchApi from '../service/api';
import { IPeople } from '../interfaces/People';

const usePeople = () => {
  const [people, setPeople] = useState(Array<IPeople>);

  const fetchPeople = async () => {
    const data = await fetchApi('people');
    setPeople(data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return people;
};

export default usePeople;
