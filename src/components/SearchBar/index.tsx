import { useContext } from 'react';
import { GlobalContext } from '../../context/Context';

function SearchBar() {
  const { search, setSearch } = useContext(GlobalContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleChange}
      />
      <button type="button">Search</button>
    </div>
  );
}

export default SearchBar;
