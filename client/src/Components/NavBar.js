import React from "react";
import {NavLink} from "react-router-dom";

function NavBar ( {user, isAuth, isAdmin} ) {
    // const linkStyles = {
    //     display: "inline-block",
    //     width: "60px",
    //     padding: "20px",
    //     background: "black",
    //     color: "white",
    //   };
    console.log({user})
    console.log({isAdmin})
    console.log({isAuth})
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
            {isAuth ? "Welcome, " + user.name : "Sign In"}
        </NavLink>
    </div>
    )
}

export default NavBar
