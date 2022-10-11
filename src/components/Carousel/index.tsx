// import { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { IFilm } from '../../interfaces/Film';
import './styles.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useFilms from '../../hooks/films.hook';
import DetailsButton from '../FilmDetailsButton';

function Carousel() {
  const films = useFilms();

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {films
          .filter((film: IFilm) => film.rt_score >= 94)
          .map((film: IFilm) => (
            <SwiperSlide key={film.id}>
              <div className='swiper-slide'>
                <img src={film.movie_banner} alt={film.title} />
                <div className='content'>
                  <h2 className='title-film'>{film.title}</h2>
                  <h3 className='original-title'>{film.original_title}</h3>
                  <p className='description'>{film.description}</p>
                  <p className='director'>{film.director}</p>
                <DetailsButton filmId={film.id} />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
