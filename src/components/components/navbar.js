import React from 'react'
import { NavLink } from "react-router-dom"

export default function navbar() {
    return (
        <div className='navbar-wrapper'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </div>
    )
}