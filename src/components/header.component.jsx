import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper container">
            <Link to='/' class='left brand-logo'>
                Home
            </Link>
            <ul class="right">
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