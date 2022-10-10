function DetailsButton({ filmId, handleClick }:
  { filmId: string | undefined,
    handleClick: (id: string | undefined) => void }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => handleClick(filmId) }
      >
        Details
      </button>
    </div>
  );
}

export default DetailsButton;
