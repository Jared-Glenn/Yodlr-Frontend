import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar">
            <span>
                <Link className="navbar-home" to="/">YODLR</Link>
            </span>
            <span>
                <Link className="navbar-link" to="/signup">Sign Up</Link>
            </span>
            <span>
                <Link className="navbar-link" to="/admin">Admin Access</Link>
            </span>
            
            
        </div>
    )
}

export default NavBar;