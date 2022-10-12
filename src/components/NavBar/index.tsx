import { Link } from 'react-router-dom';
import './styles.css';

function index() {
  return (
    <div className="container-menu">
      <input type="checkbox" className="bt_menu" id="bt_menu" />
      <label htmlFor="bt_menu">&#9776;</label>
      <nav className="menu">
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
    </div>
  );
}

export default index;
