import React from 'react';
import { timess } from "../data";

export const Times = ({ match }) => {
    const chosenDate = match.params.dateId;
    const availableTimes = timess.filter(time => time.dateId === parseInt(chosenDate));

    const [times, setTimes] = React.useState({availableTimes});

    const handleChange = e => {
        setTimes({ ...times });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(times);
    };

    return (
        <div className='container'>
            <div className='row'>
                <form className='col s12' onSubmit={handleSubmit}>
                    <div className='row'>
                    {
                        availableTimes.map(time => (
                            <div key={time.id} className='col s12'>
                                <p>
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            name='time' 
                                            checked={time.booked}
                                            onChange={handleChange}
                                        />
                                        <span>{time.time}</span>
                                    </label>
                                </p>
                            </div>
                        ))
                    }
                    </div>
                    <button type='submit'>Book</button>
                </form>
            </div>
        </div>
    );
};