import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(){
    return (
        <navbar>
            <Link to="/view-notes">View All</Link>
            <Link to="add-note">Add New</Link>
        </navbar>
    )
}