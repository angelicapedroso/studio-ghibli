import { useContext } from 'react';
import FilmCard from '../../components/FilmCard';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import { GlobalContext } from '../../context/Context';
import useFilms from '../../hooks/films.hook';

function Films() {
  const films = useFilms();
  const { search } = useContext(GlobalContext);

  const filtered = films.filter((f) => f.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <NavBar />
      <SearchBar placeholder="search a film" />
      {
        filtered.length > 0 ? <FilmCard films={filtered} /> : <h1>No films found</h1>
      }
    </div>
  );
}

export default Films;
