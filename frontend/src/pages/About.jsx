import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>

      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          minHeight: "70vh",
          backgroundColor: "#f4f8f4",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "green",
            marginBottom: "20px",
          }}
        >
          About EcoStay
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#444",
          }}
        >
          EcoStay is an eco-tourism platform that helps travelers discover
          beautiful mountain stays, forest cottages, and lakeside homestays.
          Our goal is to promote sustainable tourism and support local
          communities while providing unforgettable travel experiences.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              width: "250px",
              padding: "25px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h2>🌿 Mission</h2>
            <p>Promoting sustainable and eco-friendly tourism.</p>
          </div>

          <div
            style={{
              width: "250px",
              padding: "25px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h2>🏔 Vision</h2>
            <p>Connecting travelers with nature and local communities.</p>
          </div>

          <div
            style={{
              width: "250px",
              padding: "25px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h2>🌍 Values</h2>
            <p>Nature conservation, local culture, and responsible travel.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;