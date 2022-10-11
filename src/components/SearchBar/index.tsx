import './styles.css';

function SearchBar({
  placeholder, value, onChange, handleClick,
}: {
  placeholder: string, value: string, onChange: (
    event: React.ChangeEvent<HTMLInputElement>) => void, handleClick: () => void
}) {
  return (
    <div className="container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
      <button type="button" onClick={handleClick}>x</button>
    </div>
  );
}

export default SearchBar;
