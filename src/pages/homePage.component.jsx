import React from 'react';
import { footballPitches } from '../data';

export const HomePage = () => {
    return (
        <div className='container'>
            <div class="row">
            {
                footballPitches.map(footballPitch => (
                    
                        <div class="col s12 m6 l4">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">{footballPitch.name}</span>
                                <p>Address: {footballPitch.address}</p>
                                <p>Contact number: {footballPitch.contactNumber}</p>
                                <p>Price per hour: {footballPitch.pricePerHour}</p>
                            </div>
                            <div class="card-action">
                                <a href="#">Book</a>
                            </div>
                        </div>
                        </div>
                    
                ))
            }
            </div>
        </div>
    );
};