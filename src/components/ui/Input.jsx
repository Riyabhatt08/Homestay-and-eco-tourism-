/**
 * Input component
 * Props:
 * - placeholder: input placeholder
 */

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      style={{
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "6px",
      }}
    />
  );
}

export default Input;