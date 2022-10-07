import { Link } from 'react-router-dom';

function index() {
  return (
    <div>
      <nav>
      <ul>
        <li>
          <Link to="/">Studio Ghibli</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default index;
