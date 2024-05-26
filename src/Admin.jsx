import React, { useState, useEffect } from "react";
import "./Admin.css";
import YodlrApi from "./api";

import User from "./User.jsx";

function Admin() {

    const [ users, setUsers ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        async function getUsers() {
            setIsLoading(true);
            try {
                const res = await YodlrApi.getUsers();
                console.log(res)
                setUsers(res);
            }
            catch (err) {
                setError(err);
            }
            setIsLoading(false);
        }
        getUsers();
    }, []);

    return (
        <>
            <h1 className="main">Admin View</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.map(e => <p key={e}>{e}</p>)}</div>
            ) : (
                <div className="list">
                    {users.map(user => {
                    console.log(user);
                    return <User key={user.id} {...user} />;
                    })}
                </div>
            )}
        </>
    )
}

export default Admin;