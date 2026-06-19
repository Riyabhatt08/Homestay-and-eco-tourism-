import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ComponentsDemo from "./pages/ComponentsDemo";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <Card
          title="Eco Stay"
          description="Stay close to nature."
        />

        <Card
          title="Adventure Tours"
          description="Explore mountains and forests."
        />

        <Card
          title="Local Culture"
          description="Experience village life."
        />
      </div>

      <Footer />
      <ComponentsDemo />
    </>
  );
}

export default App;