import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;
    console.log(userName, password);
    // Call an API to Login
    if (userName === "divyansh" && password === "12345") {
      // Redirect the user to dashboard
      navigate("/dashboard");
    } else {
      // Show incorrect username / password message
      alert("Incorrect username or password.");
    }
  };

  return (
    <>
      <form onSubmit={onLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
