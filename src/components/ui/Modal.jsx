/**
 * Modal component
 * Props:
 * - title: modal heading
 */

function Modal({ title }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>This is a modal component.</p>
    </div>
  );
}

export default Modal;