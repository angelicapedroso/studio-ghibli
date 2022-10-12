// import { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useContext } from 'react';
import { IFilm } from '../../interfaces/Film';
import './styles.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import DetailsButton from '../FilmDetailsButton';
import { GlobalContext } from '../../context/Context';

function Carousel() {
  const { films } = useContext(GlobalContext);

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
          .filter((film: IFilm) => film.description.length < 350 && film.rt_score > 90)
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
