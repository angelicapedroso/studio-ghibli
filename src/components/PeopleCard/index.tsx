import usePeople from '../../hooks/people.hook';

function People() {
  const people = usePeople();
  console.log(people);

  return (
    <div>
      <h1>People</h1>
      <div>
        {
          people.map((p) => (
            <div key={p.id}>
              <h3>{p.name}</h3>
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
