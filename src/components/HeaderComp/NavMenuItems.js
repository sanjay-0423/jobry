import React from 'react'
import { Link } from 'react-router-dom'

const NavMenuItems = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/jobs">Job</Link>
            </li>
            <li>
                <Link to="#">Employers</Link>
            </li>
            <li>
                <Link to="#">Blog</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default NavMenuItems