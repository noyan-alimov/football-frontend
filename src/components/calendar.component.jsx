import React from 'react';
import { Link } from 'react-router-dom';
import { dates } from "../data";

export const Calendar = ({ match }) => {
    const chosenFootballPitchId = match.params.footballPitchId;
    const calendars = dates.filter(date => date.footballPitchId === parseInt(chosenFootballPitchId));
    return (
        <div className='container'>
            <h3>Please choose a date:</h3>
            <div className='row'>
            {
                calendars.map(calendar => (
                    <div className='col s12' key={calendar.id} style={{ margin: '1.5rem 0' }}>
                        <h4>
                            <Link 
                                to={`/footballPitch/${chosenFootballPitchId}/dates/${calendar.id}`} 
                                key={calendar.id}
                            >
                                {calendar.date}
                            </Link>
                        </h4>
                    </div>
                ))
            }
            </div>
        </div>
    );
};