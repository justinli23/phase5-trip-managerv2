import React from "react";
import {NavLink} from "react-router-dom";

function NavBar () {
    const linkStyles = {
        display: "inline-block",
        width: "60px",
        padding: "20px",
        background: "black",
        color: "white",
      };
      
    return (
    <div className="navbar">
        <NavLink  to="/">
            Home
        </NavLink>
        <NavLink  to="/travelers"> 
            Travelers
        </NavLink>
        <NavLink  to="/trips">
            Trips
        </NavLink>
        <NavLink  to="/signin">
            Sign In
        </NavLink>

    </div>
    )
}

export default NavBar
