function Navbar() {
  return (
    <nav
      style={{
        background: "#1e3a5f",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Trishul Eco Tourism</h2>

      <div>
        <a href="#" style={{ color: "white", margin: "10px" }}>
          Home
        </a>

        <a href="#" style={{ color: "white", margin: "10px" }}>
          About
        </a>

        <a href="#" style={{ color: "white", margin: "10px" }}>
          Dashboard
        </a>

        <a href="#" style={{ color: "white", margin: "10px" }}>
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;