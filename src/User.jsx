import React from "react";
import "./User.css";

function User({ id, firstName, lastName, email, state }) {

    console.log("FIRSTNAME:", firstName)

    return (
        <div className="user-div">
            <h3>{ firstName } { lastName }</h3>
            <p>Email: { email }</p>
        </div>
    )
}

export default User;