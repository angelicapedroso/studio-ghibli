import { useState } from 'react';
import NavBar from '../../components/NavBar';
import PeopleCard from '../../components/PeopleCard';
import SearchBar from '../../components/SearchBar';
import usePeople from '../../hooks/people.hook';

function People() {
  const people = usePeople();
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClick = () => setSearch('');

  const filtered = people.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <NavBar />
      <SearchBar
        placeholder="search a person"
        value={search}
        onChange={handleChange}
        handleClick={handleClick}
      />
      {
        filtered.length > 0 ? <PeopleCard people={filtered} /> : <h1>No person found</h1>
      }
    </div>
  );
}

export default People;
