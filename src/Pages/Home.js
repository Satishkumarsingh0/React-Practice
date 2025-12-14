import React, { useContext } from "react";
import { UserContext } from "../App";

const Home = () => {
  const { userName } = useContext(UserContext);
  return (
    <div>
      Home Page
      <div>User : {userName}</div>
    </div>
  );
};

export default Home;
