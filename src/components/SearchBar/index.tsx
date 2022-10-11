import { X, MagnifyingGlass } from 'phosphor-react';
import './styles.css';

function SearchBar({
  placeholder, value, onChange, handleClick,
}: {
  placeholder: string, value: string, onChange: (
    event: React.ChangeEvent<HTMLInputElement>) => void, handleClick: () => void
}) {
  return (
    <div className="container">
      <MagnifyingGlass size={24} className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
      <button type="button" onClick={handleClick}><X size={26} /></button>
    </div>
  );
}

export default SearchBar;
