import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/places")
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tourist Places</h1>

      {places.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {places.map((place) => (
            <li key={place.id}>
              <h3>{place.name}</h3>
              <p>{place.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;