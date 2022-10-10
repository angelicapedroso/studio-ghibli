function SearchBar({ placeholder, value, onChange } : {
  placeholder: string, value: string, onChange: (
    event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
