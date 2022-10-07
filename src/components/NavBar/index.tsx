import { Link } from 'react-router-dom';

function index() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/">Studio Ghibli</Link>
        </li>
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
