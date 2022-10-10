import { useContext } from 'react';
import NavBar from '../../components/NavBar';
import PeopleCard from '../../components/PeopleCard';
import SearchBar from '../../components/SearchBar';
import { GlobalContext } from '../../context/Context';
import usePeople from '../../hooks/people.hook';

function People() {
  const people = usePeople();
  const { search } = useContext(GlobalContext);

  const filtered = people.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <NavBar />
      <SearchBar placeholder="search a people" />
      {
        filtered.length > 0 ? <PeopleCard people={filtered} /> : <h1>No person found</h1>
      }
    </div>
  );
}

export default People;
