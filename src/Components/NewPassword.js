import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./Api";

const NewPassword = () => {
  const [data, setData] = useState({
    temppassword: "",
    newpassword: "",
    cPass: "",
  });
  const history = useHistory();
  const url = API_URL + `/password/resetpassword`;

  let tok = localStorage.getItem("token");
  let email = localStorage.getItem("email");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let path = "/";
  //     history.push(path);
  //     alert("Password Changed Successfully..");
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    //pass headers and body(data) in axios 
    axios.post(url, data, {
        headers: {
          accesstoken: tok,
          email: email,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.getItem("token", res["data"].accesstoken);
          localStorage.getItem("email", res["data"].email);
          let path = "/";
          history.push(path);
          //alert("Password Changed Successfully..");
        }
        console.log(res);
      });
  };
  return (
    <>
      <div>
        <form>
          <h1>Change your Password</h1>
          <label>Temporary Password: </label>
          <input
            type="password"
            placeholder="Enter Temporary Password"
            value={data.temppassword}
            name="password"
            onChange={(e) => setData({ ...data, temppassword: e.target.value })}
          />
          <br />
          <label>New Password: </label>
          <input
            type="password"
            placeholder="Enter New Password"
            value={data.newpassword}
            name="password"
            onChange={(e) => setData({ ...data, newpassword: e.target.value })}
          />
          <br />
          <label>Confirm Password: </label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            value={data.cPass}
            name="password"
            onChange={(e) => setData({ ...data, cPass: e.target.value })}
          />

          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPassword;
