import { useContext } from 'react';
import { GlobalContext } from '../../context/Context';

function SearchBar({ placeholder }: { placeholder: string }) {
  const { search, setSearch } = useContext(GlobalContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
