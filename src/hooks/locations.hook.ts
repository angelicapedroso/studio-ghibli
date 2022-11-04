import { useEffect, useState } from 'react';
import fetchApi from '../service/api';
import { ILocation } from '../interfaces/Location';

const useLocations = () => {
  const [locations, setLocations] = useState(Array<ILocation>);

  const fetchLocations = async () => {
    const data = await fetchApi('locations');
    setLocations(data);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return locations;
};

export default useLocations;
