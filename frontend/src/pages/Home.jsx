import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex flex-wrap gap-4 justify-center">
        <Card title="Mountain Stay" image="image1.jpg" />
        <Card title="Forest Stay" image="image2.jpg" />
        <Card title="Lake View" image="image3.jpg" />
      </div>

      <Footer />
    </>
  );
}

export default Home;