import NavBar from '../../components/NavBar';
import PeopleCard from '../../components/PeopleCard';
import SearchBar from '../../components/SearchBar';

function People() {
  return (
    <div>
      <NavBar />
      <SearchBar placeholder="search a people" />
      <PeopleCard />
    </div>
  );
}

export default People;
