import { useState } from 'react';
import LocationsCard from '../../components/LocationsCard';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import useLocations from '../../hooks/locations.hook';

function Locations() {
  const locations = useLocations();
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClick = () => setSearch('');

  const filtered = locations.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <NavBar />
      <SearchBar
        placeholder="search a location"
        value={search}
        onChange={handleChange}
        handleClick={handleClick}
      />
      {
        filtered.length > 0 ? <LocationsCard locations={filtered} /> : <h1>No location found</h1>
      }
    </div>
  );
}

export default Locations;
