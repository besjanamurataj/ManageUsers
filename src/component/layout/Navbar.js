import React from "react";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg"  style={{backgroundColor:"#435d7d"}}>
      <div className="container">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active navbar-brand">
              <NavLink className="nav-link text-white" exact to="/">Manage Users</NavLink>
            </li>

          </ul>

        </div>
        <Link className="btn btn-outline-light" to="/user/add"><span class="far fa-plus"></span>Add User</Link>
      </div>
    </nav>
  );
};
export default Navbar;