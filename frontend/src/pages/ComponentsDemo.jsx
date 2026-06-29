import React, { useState } from "react";

function ComponentsDemo() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        UI Components Showcase
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          maxWidth: "1000px",
        }}
      >
        {/* Button */}
        <div
          style={{
            width: "250px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h2>Button Component</h2>
          <button
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Click Me
          </button>
        </div>

        {/* Input */}
        <div
          style={{
            width: "250px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h2>Input Component</h2>
          <input
            type="text"
            placeholder="Enter Text"
            style={{
              padding: "10px",
              width: "100%",
            }}
          />
        </div>

        {/* Modal */}
        <div
          style={{
            width: "250px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h2>Modal Component</h2>
          <button
            onClick={() => setShowModal(true)}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Open Modal
          </button>
        </div>

        {/* Toast */}
        <div
          style={{
            width: "250px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h2>Toast Component</h2>
          <button
            onClick={handleToast}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Show Toast
          </button>
        </div>

        {/* Loader */}
        <div
          style={{
            width: "250px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h2>Loader Component</h2>

          <div
            style={{
              width: "40px",
              height: "40px",
              border: "5px solid lightgray",
              borderTop: "5px solid green",
              borderRadius: "50%",
              margin: "20px auto",
            }}
          ></div>
        </div>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
            }}
          >
            <h2>Modal Opened</h2>
            <button
              onClick={() => setShowModal(false)}
              style={{
                padding: "10px 20px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "green",
            color: "white",
            padding: "15px 20px",
            borderRadius: "5px",
          }}
        >
          Toast Message!
        </div>
      )}
    </div>
  );
}

export default ComponentsDemo;