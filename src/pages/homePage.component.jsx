import React from 'react';
import { FootballPitch } from '../components/footballPitch.component';
import { footballPitches } from '../data';

export const HomePage = () => {
    return (
        <div className='container'>
            <div className="row">
            {
                footballPitches.map(footballPitch => (
                    <FootballPitch key={footballPitch.id} footballPitch={footballPitch} />
                ))
            }
            </div>
        </div>
    );
};