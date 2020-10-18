import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
            <Link to='/' className='left brand-logo'>
                Home
            </Link>
            <ul className="right">
                <li>
                    <Link to='/addFootballPitch'>
                        Add Football Pitch
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};