import { useContext } from 'react';
import LocationsCard from '../../components/LocationsCard';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import { GlobalContext } from '../../context/Context';
import useLocations from '../../hooks/locations.hook';

function Locations() {
  const locations = useLocations();
  const { search } = useContext(GlobalContext);

  const filtered = locations.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <NavBar />
      <SearchBar placeholder="search a location" />
      {
        filtered.length > 0 ? <LocationsCard locations={filtered} /> : <h1>No locations found</h1>
      }
    </div>
  );
}

export default Locations;
