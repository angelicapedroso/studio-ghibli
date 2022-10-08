import { useEffect, useState } from 'react';
import fetchApi from '../utils/API';
import { ILocations } from '../interfaces/Locations';

const useLocations = () => {
  const [locations, setLocations] = useState(Array<ILocations>);

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
