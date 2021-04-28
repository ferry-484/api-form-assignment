// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import Axios from "axios";
// import { API_URL } from "./Api";

// const Details = () => {
//   const url = API_URL + `/menu/myprofile`;
//   const [data, setData] = useState([]);
//   const history = useHistory();

//   let token = localStorage.getItem("accesstoken");
//   let email = localStorage.getItem("email");

//   //   const getAllData = () => {
//   //     let items = JSON.parse(localStorage.getItem('array'));
//   //     setSubmittedata(items)
//   // }

//   // const handleLogout = () => {};

//   const logout = () => {
//     Axios.post(API_URL + `/auth/signout`, {
//       headers: {
//         accesstoken: token,
//         email: email,
//       },
//     }).then((res) => {
//       console.log(res);
//     });
//     let path = "/";
//     history.push(path);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();

//     // Axios.get(url, {
//     //   email: data.email,
//     //   password: data.password,
//     // }).then((res) => {
//     //   console.log(res);
//     //   //localStorage.setItem("array", JSON.stringify(res));
//     //   localStorage.setItem('token', res['data'].token);
//     //   localStorage.setItem('email', res['data'].userId);
//     // });
//     Axios.get(url, {
//       headers: {
//         access_token: token,
//         user_id: email,
//       },
//     })
//       .then((res) => {
//         setData(res["data"].result);
//         console.log(res.data);

//         // localStorage.getItem("token", res["data"].token);
//         // localStorage.getItem("email", res["data"].userId);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <div>
//         <h1>
//           User Details:
//           {/* <button onClick={handleLogout}>LogOut</button> */}
//           <button onClick={handleClick}>Click</button>
//           <br />
//           <table className="table">
//             <thead>
//               <tr>
//                 <td>First Name</td>
//                 <td>Last Name</td>
//                 <td>Email</td>
//                 <td>Gender</td>
//                 <td>Phone</td>
//               </tr>
//             </thead>
//             <tbody>
//               {/* {data.map((value, index) => {
//           return (
//             <tr key={index}>
//               <td>{value.firstname}</td>
//               <td>{value.lastname}</td>
//               <td>{value.email}</td>
//               <td>{value.gender}</td>
//               <td>{value.phone}</td>
//             </tr>
//           );

//         })} */}

//               {data
//                 ? data.map((item) => {
//                     return <div><p>{item.firstname}</p></div>;
//                   })
//                 : "Loading..."}
//             </tbody>
//           </table>
//           <button onClick={logout}>Logout</button>
//         </h1>
//       </div>
//     </>
//   );
// };

// export default Details;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./Api";

function Details(props) {
  // const url = API_URL  + `profile`;
  const [data, setData] = useState([]);
  const history = useHistory();

  let tok = localStorage.getItem("token");
  let email = localStorage.getItem("email");

  const handleSubmit = () => {
    axios
      .get(API_URL + `/menu/myprofile`, {
        headers: {
          accesstoken: tok,
          email: email,
        },
      })
      .then((res) => {
        setData(res["data"].data);
        console.log(data);
      });
  };

  const logout = () => {
    axios
      .post(API_URL + `/auth/signout`, data, {
        headers: {
          accesstoken: tok,
          email: email,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.clear();
        }
        console.log(res);
      });
    let path = "/";
    history.push(path);
  };

  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h1>
        User Details:
        <button onClick={logout}>Logout</button>
        <Link to={"/"}>
          <button>Back to HomePage</button>
        </Link>
      </h1>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              // <div key={index}>
              <tr key={index}>
                <td>{value.firstname}</td>
                <td>{value.lastname}</td>
                <td>{value.gender}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={handleSubmit}>Details</button>
    </div>
  );
}
export default Details;
