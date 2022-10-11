import { useParams } from 'react-router-dom';
import { useFilm } from '../../hooks/films.hook';
import './styles.css';

function FilmDetailsCard() {
  const { id } = useParams();
  const film = useFilm(id);

  return (
    <div className="container-details">
      {
        <div className="container-details-card">
          <div className="details-image">
            <img src={film.movie_banner} alt={film.title} />
          </div>
          <div className="container-details-content">
            <h2 className="details-title">{film.title}</h2>
            <h3>Description:</h3>
            <p>{film.description}</p>
              <h3>Director:</h3>
              <p>{film.director}</p>
              <h3>Producer:</h3>
              <p>{film.producer}</p>
              <h3>Release date:</h3>
              <p>{film.release_date}</p>
              <h3>Running time:</h3>
              <p>{film.running_time} minutes</p>
              <h3>Rating Score:</h3>
              <p>{film.rt_score}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default FilmDetailsCard;
