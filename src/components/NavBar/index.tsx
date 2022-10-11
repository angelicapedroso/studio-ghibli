import { Link } from 'react-router-dom';
import './styles.css';

function index() {
  return (
    <nav className="navbar">
      <ul>
        <li className="title-navbar" >
          <Link to="/">Studio Ghibli</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default index;
