/**
 * Toast component
 * Props:
 * - message: toast text
 */

function Toast({ message }) {
  return (
    <div
      style={{
        background: "#333",
        color: "white",
        padding: "10px",
        borderRadius: "6px",
      }}
    >
      {message}
    </div>
  );
}

export default Toast;