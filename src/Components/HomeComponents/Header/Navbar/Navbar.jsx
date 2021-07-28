import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class='navbar navbar-expand-lg navbar-light bg-light navbar-container'>
            <div class='container-fluid'>
                <Link class='navbar-brand' to='/'>
                    Code Hunting
                </Link>
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li class='nav-item'>
                            <Link to="/login" class='nav-link active' aria-current='page' href="/login">
                                Login
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to="/courses" class='nav-link active' aria-current='page' href="/courses">
                            Courses
                            </Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;