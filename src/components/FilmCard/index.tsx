import { useNavigate } from 'react-router-dom';
import { IFilm } from '../../interfaces/Film';

function FilmCard({ films }: { films: IFilm[] }) {
  const navigate = useNavigate();

  const handleClick = (id: string | undefined) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <h1>Films</h1>
      <div>
        {
          films.map((film) => (
            <div key={film.id}>
              <h2>{film.title}</h2>
              <img src={film.image} alt={film.title} />
              <button
                type="button"
                onClick={() => handleClick(film.id)}
              >
                Details
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default FilmCard;
