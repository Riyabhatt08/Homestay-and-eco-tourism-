function Navbar() {
  return (
    <nav className="bg-green-900 text-white flex justify-between items-center px-10 py-4">
      <div>
        <h1 className="text-2xl font-bold">EcoStay</h1>
        <p className="text-sm">Trishul Eco-Homestays</p>
      </div>

      <ul className="flex gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Rooms</li>
      </ul>

      <button className="bg-white text-green-900 px-4 py-2 rounded">
        Log In
      </button>
    </nav>
  );
}

export default Navbar;