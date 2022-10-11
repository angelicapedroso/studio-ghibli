import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IFilm } from '../../interfaces/Film';
import DetailsButton from '../FilmDetailsButton';
import './styles.css';

function FilmCard({ films }: { films: IFilm[] }) {
  const navigate = useNavigate();

  const handleClick = (filmId: string | undefined) => {
    navigate(`/details-film/${filmId}`);
  };

  return (
    <div className="card-section">
      <h1>Films</h1>
      <div className="card" >
        {
          films.map((film) => (
            <div className='card-container'>
            <img src={film.image} alt={film.title} className='card-banner' />
            <div className='card-content'>
              <div className='card-title-container'>
                <h2 className='card-title'>{film.title}</h2>
                <p className='card-director'>{film.director}</p>
                <button type='button' className='card-button'>Details</button>
              </div>
              <div className='card-score-container'>
                <p className='card-score'>{film.rt_score}</p>
              </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default FilmCard;
