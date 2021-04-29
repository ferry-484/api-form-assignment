// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Axios from "axios";
// import { API_URL } from "./Api";

// //  const HandleLogin = () => {
// //    if (user.userName === "jyotirmoy" && user.password === "password") {
// //      props.history.push("/products");
// //    } else {
// //      alert("Wrong username or password!");
// //    }
// //  };

// const Login = (props) => {
//   //const [user, setUser] = useState([{ email: "", Password: "" }]);
//   //const url = "https://d3ff3eb0ac4e.ngrok.io/auth/signin";
//   const url = API_URL + `/auth/signin`;

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const history = useHistory();

//   const handleSignup = () => {
//     let pathname = "/signup";
//     history.push(pathname);
//   };

//   const handleLogin = (e) => {
//     // if (user.email === "ferry@gmail.com" && user.Password === "1234") {
//     //   let path = "/user";
//     //   history.push(path);
//     // } else {
//     //   alert("Wrong Details..");
//     //
//     e.preventDefault();

//     Axios.post(url, {
//       email: data.email,
//       password: data.password,
//     }).then((res) => {
//       // console.log(res);
//       // //localStorage.setItem("array", JSON.stringify(res));
//       // localStorage.setItem("accesstoken", res["data"].accesstoken);
//       // localStorage.setItem("email", res["data"].email);
//       if (res.status === 200)
//             {
//                 console.log(res);
//                 localStorage.setItem('token', res['data'].accesstoken);
//                 localStorage.setItem('email', res['data'].email)
//             }
//     });
//     // localStorage.setItem("array", JSON.stringify(data));
//     // localStorage.setItem("array", JSON.stringify(res));
//     //console.log(res.data)
//     history.push("/user");
//   };

//   // async function handleLogin(e) {
//   //   e.preventDefault();

//   //   console.warn("data", data);
//   //   let item = data;
//   //   let result = await fetch("https://d3ff3eb0ac4e.ngrok.io/auth/signin", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Accept: "application/json",
//   //     },
//   //     body: JSON.stringify(item),
//   //   });
//   //   result = await result.json();
//   //   localStorage.setItem("user-info", JSON.stringify(result));
//   //   props.history.push("/user");
//   // }

//   // const registerPage = () => {
//   //   props.history.push("/");
//   // };

//   return (
//     <>
//       <div>
//         <h1>
//           Login Page:{" "}
//           <button
//             //   style={{alignSelf: "right"}}
//             onClick={handleSignup}
//           >
//             SignUp
//           </button>
//         </h1>

//         <form>
//           <label>Email: </label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             onChange={(e) => setData({ ...data, email: e.target.value })}
//             id="email"
//             value={data.email}
//           />
//           <br />

//           <label>Password: </label>
//           <input
//             type="password"
//             placeholder="Enter password"
//             onChange={(e) => setData({ ...data, password: e.target.value })}
//             id="password"
//             value={data.password}
//           />
//           <br />

//           <button
//             type="submit"
//             //disabled={!user.email || !user.Password}
//             onClick={handleLogin}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./Api";


function Login() {
  const history = useHistory();
  const url = API_URL + `/auth/login`;
  // " http://de1c4fdb3917.ngrok.io/login";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleForgot = () => {
    let pathName = "/reset";
    history.push(pathName);
  }

  const handleSubmit = (e) => {
    // console.log(data);
    e.preventDefault();

    axios.post(url, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        // history.push(path);
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("token", res["data"].accesstoken);
          localStorage.setItem("email", res["data"].email);
          let path = "/user";
          history.push(path);
        }
      });
    // console.log(res);
    // localStorage.setItem("user",JSON.stringify(data));
  };

  return (
    <div>
      <h1>Home Page: 
      <Link to={"/signup"}>
        <button>SignUp</button>
      </Link>
      </h1>
      <label>Email: </label>
      
      <input
        type="mail"
        value={data.email}
        placeholder="Enter Email"
        name="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        placeholder="Enter Password"
      ></input>
      <br />

      <button onClick={handleSubmit}>Submit</button>
      <br />
      <button onClick={handleForgot}>Forgot Password</button>
      {/* <Link to ={"./Record"}></Link> */}

      {/* <input type="text" placeholder="username"/><br/>
        <input type="password" placeholder="password"/><br/> */}
      
      {/* <Link to ={"./Record"}><button>Login</button></Link> */}
    </div>
  );
}
export default Login;
