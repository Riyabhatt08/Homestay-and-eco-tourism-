/**
 * Button component
 * Props:
 * - text: button text
 */

function Button({ text }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        background: "#22c55e",
        color: "white",
        border: "none",
        borderRadius: "8px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;