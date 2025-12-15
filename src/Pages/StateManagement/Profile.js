import React, { useContext, useState } from "react";
import ChangePofile from "../../Component/ChangePofile";
import { UserContext } from "../../App";

const Profile = () => {
  const { userName } = useContext(UserContext);
  const [changeProfile, setChangeProfile] = useState(false);
  return (
    <div>
      Profile, User is : {userName}
      <div>
        <button onClick={() => setChangeProfile(true)}>Change User Name</button>
      </div>
      {changeProfile && <ChangePofile />}
    </div>
  );
};

export default Profile;
