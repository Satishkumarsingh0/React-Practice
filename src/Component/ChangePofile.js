import React, { useState, useContext } from "react";
import { UserContext } from "../App";
const ChangePofile = () => {
  const [newUserName, setNewUserName] = useState("");
  const { setUserName } = useContext(UserContext);
  return (
    <div>
      <input
        type="text"
        name="newUserName"
        id="newUserName"
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <button onClick={() => newUserName && setUserName(newUserName)}>
        Change Username
      </button>
    </div>
  );
};

export default ChangePofile;
