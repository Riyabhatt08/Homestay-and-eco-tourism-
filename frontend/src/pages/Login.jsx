import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Login() {
  return (
    <div id="login" style={{ padding: "40px" }}>
      <h1>Login</h1>

      <p>Please login to access your account.</p>

      <Input
        type="email"
        placeholder="Enter Email"
      />

      <br /><br />

      <Input
        type="password"
        placeholder="Enter Password"
      />

      <br /><br />

      <Button text="Login" />
    </div>
  );
}

export default Login;