import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
        <h1>About Trishul Eco Tourism</h1>

        <p>
          Trishul Eco Tourism is dedicated to promoting sustainable and
          eco-friendly travel experiences. Our mission is to connect people
          with nature while preserving the environment and supporting local
          communities.
        </p>

        <p>
          We provide comfortable eco stays, adventure tours, trekking
          experiences, and opportunities to explore the rich culture and
          traditions of local villages. Our tourism activities are designed
          to minimize environmental impact while creating memorable
          experiences for visitors.
        </p>

        <p>
          Our goal is to encourage responsible tourism that preserves
          forests, mountains, rivers, and wildlife for future generations.
          Visitors can enjoy natural beauty while contributing to the
          development of rural communities.
        </p>

        <h2>Our Services</h2>

        <ul>
          <li>Eco-friendly accommodation</li>
          <li>Adventure and trekking tours</li>
          <li>Village and cultural experiences</li>
          <li>Nature exploration programs</li>
          <li>Local guide support</li>
        </ul>

        <h2>Our Vision</h2>

        <p>
          We aim to become a trusted eco-tourism platform that inspires
          people to travel responsibly, respect nature, and support local
          communities while enjoying unique travel experiences.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;