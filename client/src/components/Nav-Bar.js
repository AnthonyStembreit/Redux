import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <div id="nav">
            <Link to="/add-notes">Create</Link>
            <Link to="/view-notes">View</Link>
        </div>
    )
}