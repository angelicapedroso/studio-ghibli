import { ILocation } from '../../interfaces/Location';
import './styles.css';

function Locations({ locations }: { locations: ILocation[] }) {
  return (
    <div className="container-location">
      <h1 className="page-title">Locations</h1>
      <div className="card-location-grid">
        {
          locations.map((l) => (
            <div className="card-location-content" key={l.id}>
              <h3 className="title-location">{l.name}</h3>
              <ul>
                <li><span>Climate:</span> {l.climate}</li>
                <li><span>Terrain:</span> {l.terrain}</li>
                <li><span>Surface Water:</span> {l.surface_water}</li>
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Locations;
