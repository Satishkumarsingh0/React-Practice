import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/todolist"}>
        Todo List
      </Link>
      <Link className="link" to={"/predictage"}>
        Predict Age
      </Link>
      <Link className="link" to={"/catfact"}>
        Cat Fact
      </Link>
      <Link className="link" to={"/person"}>
        Person
      </Link>
      <Link className="link" to={"/gasplanet"}>
        Gas Planet
      </Link>
      <Link className="link" to={"/profile"}>
        Profile
      </Link>
    </div>
  );
};

export default NavBar;
