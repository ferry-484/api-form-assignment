// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "./Api";

// const Reset = () => {
//   const [data, setData] = useState({
//     email: "",
//   });

//   //let tok = localStorage.getItem("token");
//   let email = localStorage.getItem("email");

//   const history = useHistory();
//   const url = API_URL + `/password/forgotpassword`;

//   const handleSubmit = () => {
//     axios
//       .post(url, {
//         email: data.email,
//       })
//       .then((res) => {
//         setData(res["data"].data);
//         console.log(data);
//       });
//     let pathName = "/new";
//     history.push(pathName);
//     alert("Check your Email");
//   };

//   //   const onSubmit = (e) => {
//   //     e.preventDefault();
//   //     let pathName = "/new";
//   //     history.push(pathName);
//   //     alert("Check your Email");
//   //   };

//   return (
//     <>
//       <div>
//         <form>
//           <h1>Please Enter Your Registered Email ID:</h1>
//           <label>Email: </label>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={data.email}
//             name="email"
//             onChange={(e) => setData({ ...data, email: e.target.value })}
//           />
//           <br />
//           <button type="submit" onClick={handleSubmit}>
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Reset;

import axios from "axios";
import { API_URL } from "./Api";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
function Reset() {
  const history = useHistory();
  const [forgetpass, setForgetpass] = useState({
    email: "",
  });
  const url = API_URL + `/password/forgotpassword`;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, {
        email: forgetpass.email,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("token", res["data"].accesstoken);
          localStorage.setItem("email", res["data"].email);
          let path = "/new";
          history.push(path);
        }
        console.log(res);
      });
  };

  return (
    <div>
      <h1>Please Enter Your Registered Email ID:</h1>
      <label>Email: </label>
      <input
        type="mail"
        value={forgetpass.email}
        name="email"
        placeholder="Enter Email"
        onChange={(e) =>
          setForgetpass({ ...forgetpass, email: e.target.value })
        }
      />
      <br />
      <Link to={"./Resetpass"}>
        <button onClick={handleSubmit}>Reset Password</button>
      </Link>
    </div>
  );
}
export default Reset;
