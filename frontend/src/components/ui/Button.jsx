function Button({ text }) {
  return (
    <button
      onClick={() => alert("Button Clicked!")}
      style={{
        padding: "10px 20px",
        background: "green",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;