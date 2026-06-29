import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>

      <div style={{ padding: "30px" }}>
        <h1 style={{ fontSize: "40px" }}>
          EcoStay Dashboard
        </h1>

        <p>
          Welcome back! Manage your eco tourism activities.
        </p>

        {/* Stats Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div className="card">
            <h2>120+</h2>
            <p>Bookings</p>
          </div>

          <div className="card">
            <h2>80+</h2>
            <p>Destinations</p>
          </div>

          <div className="card">
            <h2>500+</h2>
            <p>Travelers</p>
          </div>
        </div>

        {/* Recent Bookings */}
        <div style={{ marginTop: "40px" }}>
          <h2>Recent Bookings</h2>

          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Destination</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Riya</td>
                <td>Manali</td>
                <td>Confirmed</td>
              </tr>

              <tr>
                <td>Ankit</td>
                <td>Goa</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Destinations */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div className="destination">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500"
              width="100%"
            />
            <h3>Manali</h3>
          </div>

          <div className="destination">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500"
              width="100%"
            />
            <h3>Kerala</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;