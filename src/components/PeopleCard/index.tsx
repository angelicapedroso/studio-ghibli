import { IPeople } from '../../interfaces/People';
import './styles.css';

function People({ people }: { people: IPeople[] }) {
  return (
    <div className="container-people">
      <h1 className="page-title">People</h1>
      <div className="card-people-grid">
        {
          people.map((p) => (
            <div className="card-people-content" key={p.id}>
              <h3 className="title-people">{p.name}</h3>
              <ul>
                <li>Gender: {p.gender}</li>
                <li>Age: {p.age}</li>
                <li>Eye Color: {p.eye_color}</li>
                <li>Hair Color: {p.hair_color}</li>
              </ul>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default People;
