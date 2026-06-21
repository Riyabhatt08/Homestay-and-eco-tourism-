import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

function ComponentsDemo() {
  return (
    <div
      style={{
        padding: "40px",
        background: "#1e293b",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#22c55e",
          marginBottom: "30px",
        }}
      >
        UI Components Showcase
      </h1>

      <div
        style={{
          background: "#334155",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Button Component</h2>
        <Button text="Click Me" />
      </div>

      <div
        style={{
          background: "#334155",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Input Component</h2>
        <Input placeholder="Enter your name" />
      </div>

      <div
        style={{
          background: "#334155",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Modal Component</h2>
        <Modal title="Welcome Modal" />
      </div>

      <div
        style={{
          background: "#334155",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>Toast Component</h2>
        <Toast message="Booking Successful!" />
      </div>

      <div
        style={{
          background: "#334155",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Loader Component</h2>
        <Loader />
      </div>
    </div>
  );
}

export default ComponentsDemo;