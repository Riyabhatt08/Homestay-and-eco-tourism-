/**
 * Card component
 * @param {string} title
 * @param {string} image
 */

function Card({ title, image }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        width="100%"
        style={{ borderRadius: "10px" }}
      />

      <h3>{title}</h3>
    </div>
  );
}

export default Card;