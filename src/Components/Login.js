import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//  const HandleLogin = () => {
//    if (user.userName === "jyotirmoy" && user.password === "password") {
//      props.history.push("/products");
//    } else {
//      alert("Wrong username or password!");
//    }
//  };

const Login = (props) => {   
  //const [user, setUser] = useState([{ email: "", Password: "" }]);

  const history = useHistory();
  const handleSignup = () => {
    let pathname = "/signup";
    history.push(pathname);
  };

  const handleLogin = () => {
    // if (user.email === "ferry@gmail.com" && user.Password === "1234") {
    //   let path = "/user";
    //   history.push(path);
    // } else {
    //   alert("Wrong Details..");
    // }
    console.log(res.data)
  };

  return (
    <>
      <div>
        <h1>
          Login Page:{" "}
          <button
            //   style={{alignSelf: "right"}}
            onClick={handleSignup}
          >
            SignUp
          </button>
        </h1>

        <form>
          <label>Email: </label>
          <input type="email" placeholder="Enter UserName" />
          <br />

          <label>Password: </label>
          <input type="password" placeholder="Enter password" />
          <br />

          <button
            type="submit"
            //disabled={!user.email || !user.Password}
            onClick={handleLogin}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
