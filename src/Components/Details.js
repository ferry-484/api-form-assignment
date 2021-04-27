import React from "react";
import { useHistory } from "react-router-dom";

const Details = () => {
    const history = useHistory();
    const handleLogout = () => {
        
        let path = "/";
        history.push(path);
    }   

  return (
    <>
      <div>
        <h1>
          User Details:<button onClick={handleLogout}>LogOut</button>
        </h1>
      </div>
    </>
  );
};

export default Details;
