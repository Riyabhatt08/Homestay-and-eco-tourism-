function Home() {
  return (
    <section className="bg-green-950 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4">EcoStay</h1>

        <h2 className="text-3xl mb-4">
          Direct Booking Platform for Homestays
        </h2>

        <p className="max-w-3xl mx-auto mb-8">
          Helping homestay owners manage bookings efficiently while providing
          guests with a seamless booking experience.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-900 px-6 py-3 rounded">
            Explore Rooms
          </button>

          <button className="border px-6 py-3 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;