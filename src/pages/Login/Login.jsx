import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";

// import { useContext } from "react";

// import { AppContext } from "../../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const ctx = useContext(AppContext);
  // console.log(ctx);
  const onLogin = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;
    console.log(userName, password);
    // Call an API to Login
    if (userName === "divyansh" && password === "12345") {
      // Dispatch the login() action from redux
      dispatch(
        login({
          name: userName,
          email: `${userName}@gmail.com`,
        })
      );
      // ctx.setState({
      //   ...ctx.state,
      //   isLoggedIn: true
      // });
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
