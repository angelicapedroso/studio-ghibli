import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IFilm } from '../../interfaces/Film';
import DetailsButton from '../DetailsButton';

function FilmCard({ films }: { films: IFilm[] }) {
  const navigate = useNavigate();

  const handleClick = (filmId: string | undefined) => {
    navigate(`/details-film/${filmId}`);
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
              <DetailsButton filmId={film.id} handleClick={handleClick} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default FilmCard;
