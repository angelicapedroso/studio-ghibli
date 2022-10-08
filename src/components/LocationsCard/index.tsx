import useLocations from '../../hooks/locations.hook';

function Locations() {
  const locations = useLocations();

  return (
    <div>
      <h1>Locations</h1>
      <div>
        {
          locations.map((l) => (
            <div key={l.id}>
              <h3>{l.name}</h3>
              <ul>
                <li>Climate: {l.climate}</li>
                <li>Terrain: {l.terrain}</li>
                <li>Surface Water: {l.surface_water}</li>
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Locations;
