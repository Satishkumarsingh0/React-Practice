import React, { useContext } from "react";
import ChangePofile from "../../Component/ChangePofile";
import { UserContext } from "../../App";

const Profile = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>
      Profile, User is : {userName}
      <ChangePofile />
    </div>
  );
};

export default Profile;
