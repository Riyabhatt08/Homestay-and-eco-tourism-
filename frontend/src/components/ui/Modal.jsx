import { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={styles.button}
      >
        Open Modal
      </button>

      {open && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>EcoStay Modal</h2>
            <p>This is a modal component.</p>

            <button
              onClick={() => setOpen(false)}
              style={styles.close}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  button: {
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "10px",
    color: "white",
    width: "300px",
    textAlign: "center",
  },

  close: {
    marginTop: "15px",
    background: "red",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Modal;