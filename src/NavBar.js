import React from 'react'
import { NavLink } from "react-router-dom";
function NavBar() {
    return (
        <div>
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <NavLink className="navbar-brand" to="/">
                    𝐒𝐮𝐫𝐚𝐣 𝐑𝐚𝐦𝐚 𝐘𝐚𝐝𝐚𝐯</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item ">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </>
        </div>
    )
}

export default NavBar
