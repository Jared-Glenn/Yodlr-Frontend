import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import SignUp from "./SignUp.jsx";
import Admin from "./Admin.jsx";

function RouteList() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/signup" element={ <SignUp /> } />
                <Route path="/admin" element={ <Admin /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteList;