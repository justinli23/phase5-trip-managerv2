import React from "react";
import {NavLink} from "react-router-dom";

function NavBar () {
    const linkStyles = {
        display: "inline-block",
        width: "60px",
        padding: "20px",
        background: "black",
        color: "white",
        position: "sticky"
      };
      
    return (
    <div className="navbar">
        NAVBAR <br></br>
        <NavLink style={linkStyles} to="/">
            Home
        </NavLink> |{" "}
        <NavLink style={linkStyles} to="/travelers"> 
            Travelers
        </NavLink> |{" "}
        <NavLink style={linkStyles} to="/trips">
            Trips
        </NavLink> |{" "}
        <NavLink style={linkStyles} to="/signin">
            Sign In
        </NavLink>

    </div>
    )
}

export default NavBar
