import { useNavigate } from 'react-router-dom';
import './styles.css';

function DetailsButton({ filmId }: { filmId: string | undefined }) {
  const navigate = useNavigate();

  const handleClick = (id: string | undefined) => {
    navigate(`/details-film/${id}`);
  };

  return (
    <div>
      <button
        className="details-button"
        type="button"
        onClick={() => handleClick(filmId)}
      >
        Details
      </button>
    </div>
  );
}

export default DetailsButton;
