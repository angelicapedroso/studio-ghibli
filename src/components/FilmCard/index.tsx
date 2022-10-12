import { IFilm } from '../../interfaces/Film';
import DetailsButton from '../FilmDetailsButton';
import './styles.css';

function FilmCard({ films }: { films: IFilm[] }) {
  return (
    <div className="card-section">
      <h2 className="page-title">Films</h2>
      <div className="card-grid" >
        {
          films.map((film) => (
            <div className='card-container'>
              <img src={film.image} alt={film.title} className='card-banner' />
              <div className='card-content'>
                <div className='card-title-container'>
                  <h2 className='card-title'>{film.title}</h2>
                  <p className='card-director'>{film.director}</p>
                </div>
                <div className='card-score-container'>
                  <p className='card-score'>{film.rt_score}</p>
                </div>
              </div>
              <DetailsButton filmId={film.id} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default FilmCard;
