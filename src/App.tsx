import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Film from './pages/Films';
import People from './pages/People';
import Locations from './pages/Locations';
import NotFound from './pages/NotFound';
import FilmDetails from './pages/FilmDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={ <Film /> } />
          <Route path="/people" element={ <People /> } />
          <Route path="/locations" element={ <Locations /> } />
          <Route path="/details/:id" element={ <FilmDetails /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
