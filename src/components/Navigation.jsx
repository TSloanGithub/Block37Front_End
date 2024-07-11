import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div id="navbar">
            <Link to="/">Home </Link>
            <Link to="/books"> Browse Our Collection</Link>
            <Link to="/account"> Account</Link>
        </div>
    )
}