import eco from "../assets/eco.jpg";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${eco})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
        EcoStay
      </h1>

      <p style={{ maxWidth: "500px" }}>
        Discover eco-friendly homestays in mountains,
        forests & villages
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Book Now
        </button>

        <button
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Explore More
        </button>
      </div>
    </section>
  );
}

export default Hero;