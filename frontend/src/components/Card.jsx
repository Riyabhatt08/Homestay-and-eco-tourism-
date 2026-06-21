/**
 * Card component
 * @param {string} title
 * @param {string} image
 */
function Card({ title, image }) {
  return (
    <div className="w-64 shadow rounded">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;