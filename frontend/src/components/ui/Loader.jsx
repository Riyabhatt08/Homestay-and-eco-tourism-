function Loader() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>

      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #334155",
    borderTop: "5px solid #22c55e",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default Loader;