import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
  const history = useHistory();
  //const url = "https://5921caf5cfac.ngrok.io/auth/signup";
  const url = "http://1553d946f492.ngrok.io/signin";
  const [data, setData] = useState({
    fname: "",
    lname: "",
    //age: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = () => {
    let path = "/";
    history.push(path);
    Axios.post(url, {
      fname: data.fname,
      lname: data.lname,
      //age: data.age,
      gender: data.gender,
      phone: parseInt(data.phone),
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
    }).then((res) => {
      console.log(res.data);
    });
    localStorage.setItem("array", JSON.stringify(data));
  };

  function handle(e) {
    //e.preventDefault();

    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <>
      <div>
        <h1>SignUp Page:</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>FirstName:</label>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setData({ ...data, fname: e.target.value })}
            id="firstname"
            value={data.fname}
          />
          <br />
          <label>LastName:</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setData({ ...data, lname: e.target.value })}
            id="lastname"
            value={data.lname}
          />
          <br />
          {/* <label>Age:</label>
          <select
            name="age"
            defaultValue={"Select Age"}
            onChange={(e) => handle(e)}
            id="age"
            value={data.age}
          >
            <option value="Select">Select Age</option>
            <option value="0-10">0-10</option>
            <option value="10-20">10-20</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
            <option value="50-60">50-60</option>
            <option value="60-70">60-70</option>
            <option value="70-80">70-80</option>
            <option value="80-90">80-90</option>
            <option value="90-100">90-100</option>
          </select> */}
          <br />
          <label>Gender: </label>
          {/* <input
        type="radio"
        value="Male"
        name="male"
        onChange={(e) => handle(e)}
              id="Male"
              value="Male"
            checked={data.gender === "Male"}
              />

     <label htmlFor="male"> Male</label>
      <input
        type="radio"
        value="Female"
        name="Female"
        onChange={(e) => handle(e)}
              id="Female"
              value="Female"
            checked={data.gender === "Female"}
              />

<label htmlFor="female">Female</label> */}
          <input
            type="radio"
            value="male"
            name="gender"
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />
          Male
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />
          Female
          <br />
          <br />
          <label>Phone:</label>
          <input
            type="number"
            placeholder="Enter Phone No."
            onChange={(e) => handle(e)}
            id="phone"
            value={data.phone}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            id="name"
            value={data.email}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            id="password"
            value={data.password}
          />
          <br />
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            onChange={(e) => setData({ ...data, cpassword: e.target.value })}
            id="confirmpassword"
            value={data.cpassword}
          />
          <br />
          <br />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

// import React, { useState } from 'react';
// import { Link,useHistory } from 'react-router-dom';
// import Axios from 'axios';

// const Signup = () => {
//     const history = useHistory();
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const [data, setData] = useState({
//         firstname: "",
//         lastname: "",
//         age: "",
//         gender: "",
//         // phone: "",
//         username: "",
//         password: "",
//         confirmpassword: ""
//     });

//  const handleSubmit= ()=>{
//      console.log(data);
//      let path = "/";
//      history.push(path);
//      Axios.post(url, {
//          firstname: data.firstname,
//      lastname: data.lastname,
//      age: data.age,
//      gender: data.gender,
//      phone: parseInt(data.phone),
//      email: data.email,
//      password: data.password,
//      confirmpassword: data.confirmpassword
//      })
//      .then(res => {
//          console.log(res.data);
//      })
//  }
//     return (
//         <div>
//             <h1>Form</h1>
//             <label>FirstName</label>
//             <input type="text" value={data.firstname} onChange={(e)=>setData({...data, firstname:e.target.value})} placeholder="firstname"></input><br/>
//             <label>LastName</label>
//             <input type="text" value={data.lastname} onChange={(e)=>setData({...data, lastname:e.target.value})} placeholder="lastname"></input><br/>

//             <label>Age: </label>

//             <select name="age"  onChange={(e)=>setData({...data, age: e.target.value})} >
//                 <option value="5">Age </option>
//                 <option value="5">5 </option>
//                 <option value="10">10</option>
//                 <option value="15">15</option>
//                 <option value="20">20</option>
//                 <option value="25">25</option>
//                 <option value="10">30</option>
//                 <option value="15">35</option>
//                 <option value="20">40</option>
//                 <option value="25">45</option>
//                 <option value="5">50</option>
//                 <option value="10">55</option>
//                 <option value="15">60</option>
//                 <option value="20">65</option>
//                 <option value="25">70</option>
//             </select><br/>

//             <label>Gender: </label>

//             <input type="radio" value="male" name="gender" onChange={(e)=>setData({...data, gender: e.target.value})} />Male
//             <input type="radio" value="female" name="gender" onChange={(e)=>setData({...data, gender: e.target.value})}  />Female
//             <br />
//             <label>Password</label>
//             <input type="password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} placeholder="password"></input><br/>
//             <label>cnfrmpassword</label>
//             <input type="password" value={
// return (
//         <div>
//             <h1>Form</h1>
//             <label>FirstName</label>
//             <input type="text" value={data.firstname} onChange={(e)=>setData({...data, firstname:e.target.value})} placeholder="firstname"></input><br/>
//             <label>LastName</label>
//             <input type="text" value={data.lastname} onChange={(e)=>setData({...data, lastname:e.target.value})} placeholder="lastname"></input><br/>

//             <label>Age: </label>

//             <select name="age"  onChange={(e)=>setData({...data, age: e.target.value})} >
//                 <option value="5">Age </option>
//                 <option value="5">5 </option>
//                 <option value="10">10</option>
//                 <option value="15">15</option>
//                 <option value="20">20</option>
//                 <option value="25">25</option>
//                 <option value="10">30</option>
//                 <option value="15">35</option>
//                 <option value="20">40</option>
//                 <option value="25">45</option>
//                 <option value="5">50</option>
//                 <option value="10">55</option>
//                 <option value="15">60</option>
//                 <option value="20">65</option>
//                 <option value="25">70</option>
//             </select><br/>

//             <label>Gender: </label>

//             <input type="radio" value="male" name="gender" onChange={(e)=>setData({...data, gender: e.target.value})} />Male
//             <input type="radio" value="female" name="gender" onChange={(e)=>setData({...data, gender: e.target.value})}  />Female
//             <br />
//             <label>Password</label>
//             <input type="password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} placeholder="password"></input><br/>
//             <label>cnfrmpassword</label>
//             <input type="password" value={data.cnfrmpassword} onChange={(e)=>setData({...data, cnfrmpassword:e.target.value})} placeholder="cnfrmpassword"></input><br/>

//         <br/>

//            <Link to ={"./"}><button onClick={handleSubmit}>Submit</button></Link>
//         </div>
//     );
// }

// export default Signup;
