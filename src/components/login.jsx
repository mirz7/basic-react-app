import { useRef } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const x = useRef();
  const y = useRef();
  const navigate = useNavigate();

  function f1(e) {
    e.preventDefault();
    const em = x.current.value;
    const ps = y.current.value;

    if (em === "" || ps === "") {
      window.alert("Please enter your credentials");
    } else if (em === "111" && ps === "111") {
      navigate("./mainpage"); // assuming Main is a route path
    } else {
      window.alert("Invalid Credentials");
    }
  }

  return (
    <center>
      <h1>LOGIN PAGE</h1>
        <form onSubmit={f1}>
      <br />
      <input type="text" placeholder="Enter your email" ref={x} />
      <br />
      <input type="password" placeholder="Enter your password" ref={y} />
      <br />
      <button type="submit">Login</button>
    </form>
    </center>
  );
}

export default Login;