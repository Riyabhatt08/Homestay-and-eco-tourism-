/**
 * Navbar component
 * Displays navigation links.
 */
function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-white">
      <h1>EcoStay</h1>

      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Booking</li>
        <li>Contact</li>
      </ul>

      <button>Book Now</button>
    </nav>
  );
}

export default Navbar;