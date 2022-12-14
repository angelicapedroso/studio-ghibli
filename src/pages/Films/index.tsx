import { useContext, useState } from 'react';
import FilmCard from '../../components/FilmCard';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import { GlobalContext } from '../../context/Context';

function Films() {
  const { films } = useContext(GlobalContext);
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClick = () => setSearch('');

  const filtered = films.filter((f) => f.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <NavBar />
      <SearchBar
        placeholder="search a film"
        value={search}
        onChange={handleChange}
        handleClick={handleClick}
      />
      {
        filtered.length > 0 ? <FilmCard films={filtered} /> : <h1>No films found</h1>
      }
    </div>
  );
}

export default Films;
