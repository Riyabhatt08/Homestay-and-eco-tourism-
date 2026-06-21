import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Dashboard</h1>

        <p>
          Welcome to the dashboard page.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;