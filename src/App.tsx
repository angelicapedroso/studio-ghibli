import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Film from './pages/Film';
import People from './pages/People';
import Location from './pages/Location';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film" element={ <Film /> } />
          <Route path="/people" element={ <People /> } />
          <Route path="/location" element={ <Location /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
