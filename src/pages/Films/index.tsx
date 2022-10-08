import FilmCard from '../../components/FilmCard';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';

function Films() {
  return (
    <div>
      <NavBar />
      <SearchBar/>
      <FilmCard />
    </div>
  );
}

export default Films;
