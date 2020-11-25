import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <Link to="/">
      <p className="nav">Home</p>
    </Link>
  );
}

export default Nav;
