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
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h2>UI Components Demo</h2>

      <Button text="Book Now" />

      <Input placeholder="Enter your name" />

      <Modal title="Welcome Modal" />

      <Toast message="Booking Successful!" />

      <Loader />
    </div>
  );
}

export default ComponentsDemo;