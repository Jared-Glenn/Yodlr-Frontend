import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Forms.css";
import UserContext from "./usersContext";

function SignUpForm() {
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const { registerUser } = useContext(UserContext);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data, 
            [ name ]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = formData;
        
        setIsLoading(true);
        setError(null);
        try {
            await registerUser(firstName, lastName, email);
            navigate("/");
        }
        catch (err) {
            console.error("Registration Error:", err);
            setError("Registration failed. Please try again.")
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <form className="form" onSubmit={ handleSubmit }>
                {error && <p className="error">{error}</p>}
                <label htmlFor="firstName">First Name</label>
                <input
                    className="input"
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName || ""}
                    onChange={ handleChange }
                    />
                    <br />
                <label htmlFor="lastName">Last Name</label>
                <input
                    className="input"
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName || ""}
                    onChange={ handleChange }
                    />
                    <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                    className="input"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email || ""}
                    onChange={ handleChange }
                    />
                <button className="form-button" type="submit" disabled={isLoading}>Sign Up</button>
            </form>
        </>
    )
}

export default SignUpForm;