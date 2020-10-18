import React from 'react';
import { timess } from "../data";

export const Times = ({ match }) => {
    const [times, setTimes] = React.useState({});

    const chosenDate = match.params.dateId;
    const availableTimes = timess.filter(time => time.dateId === parseInt(chosenDate));

    const handleChange = e => {

    };

    return (
        <div className='container'>
            <div className='row'>
                <form className='col s12'>
                    <div className='row'>
                        {
                            availableTimes.map(time => (
                                <div key={time.id} className='col s12'>
                                    <p>
                                        <label>
                                            <input type="checkbox" name={time.id} value={time.time} />
                                            <span>{time.time}</span>
                                        </label>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};