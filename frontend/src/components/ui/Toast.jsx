import { useState } from "react";

function Toast() {
  const [show, setShow] = useState(false);

  const handleToast = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <>
      <button
        onClick={handleToast}
        style={styles.button}
      >
        Show Toast
      </button>

      {show && (
        <div style={styles.toast}>
          Success Message!
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

  toast: {
    marginTop: "15px",
    background: "#16a34a",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    width: "200px",
  },
};

export default Toast;