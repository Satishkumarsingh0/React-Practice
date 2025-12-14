import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/todolist"}>Todo List</Link>
      <Link to={"/predictage"}>Predict Age</Link>
      <Link to={"/catfact"}>Cat Fact</Link>
      <Link to={"/person"}>Person</Link>
      <Link to={"/gasplanet"}>Gas Planet</Link>
      <Link to={"/statemanagement"}>State Management</Link>
    </div>
  );
};

export default NavBar;
