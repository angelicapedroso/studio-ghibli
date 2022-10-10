import { useParams } from 'react-router-dom';
import { useFilm } from '../../hooks/films.hook';

function FilmDetailsCard() {
  const { id } = useParams();
  const film = useFilm(id);

  return (
    <div>
      <div>
        {
          <div>
            <h2>{film.title}</h2>
            <img src={film.image} alt={film.title} />
            <p>{film.description}</p>
            <ul>
              <li>Director: {film.director}</li>
              <li>Producer: {film.producer}</li>
              <li>Release date: {film.release_date}</li>
              <li>Running time: {film.running_time}</li>
              <li>Rating Score: {film.rt_score}</li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default FilmDetailsCard;
