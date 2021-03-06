import React from 'react';
import { Link } from "react-router-dom";

export const FootballPitch = ({ footballPitch }) => {
    return (
        <div className="col s12 m6 l4">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{footballPitch.name}</span>
                    <p>Address: {footballPitch.address}</p>
                    <p>Contact number: {footballPitch.contactNumber}</p>
                    <p>Price per hour: {footballPitch.pricePerHour}</p>
                </div>
                <div className="card-action">
                    <Link to={`/footballPitch/${footballPitch.id}`}>Book</Link>
                </div>
            </div>
        </div>
    );
};