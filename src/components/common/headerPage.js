import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <NavLink activeClassName="active" to='/' exact>Home</NavLink> | {" "}
            <NavLink activeClassName="active" to='/courses'>Courses</NavLink> | {" "}
            <NavLink activeClassName="active" to='/about'>About</NavLink>
        </nav>
    );
}
