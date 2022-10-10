import LocationsCard from '../../components/LocationsCard';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';

function Locations() {
  return (
    <div>
      <NavBar />
      <SearchBar placeholder="search a location" />
      <LocationsCard />
    </div>
  );
}

export default Locations;
