import { useEffect, useState } from "react";
import "./Home.css";
import hero from "../assets/eco.jpg";
import mountain from "../assets/mountain.jpg";
import forest from "../assets/forest.jpg";
import lake from "../assets/lake.jpg";

function Home() {
  const [rooms, setRooms] = useState([]);

  const roomImages = {
    1: mountain,
    2: forest,
    3: lake,
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/homestays")
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="overlay">
          <h1>Welcome to EcoStay</h1>
          <h2>Homestay & Eco Tourism</h2>

          <p>
            Experience the beauty of Uttarakhand with peaceful eco-friendly
            homestays surrounded by forests, mountains and lakes.
          </p>

          <button className="hero-btn">Book Your Stay</button>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="rooms">
        <h2>Featured Homestays</h2>

        <div className="room-container">
          {rooms.map((room) => (
            <div className="room-card" key={room.id}>
              <img
                src={roomImages[room.id] || hero}
                alt={room.name}
              />

              <div className="room-content">
                <h3>{room.name}</h3>
                <p>📍 {room.location}</p>
                <h4>₹{room.price} / Night</h4>

                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="why">
        <h2>Why Choose EcoStay?</h2>

        <div className="features">
          <div className="feature">
            🌿
            <h3>Eco Friendly</h3>
            <p>Stay close to nature with sustainable tourism.</p>
          </div>

          <div className="feature">
            🏔️
            <h3>Beautiful Locations</h3>
            <p>Mountains, lakes and forests across Uttarakhand.</p>
          </div>

          <div className="feature">
            ❤️
            <h3>Local Hospitality</h3>
            <p>Experience authentic village culture and food.</p>
          </div>

          <div className="feature">
            ⭐
            <h3>Affordable Prices</h3>
            <p>Comfortable stays at budget-friendly prices.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;