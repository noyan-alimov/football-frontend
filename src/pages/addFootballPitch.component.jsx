import React from 'react';

export const AddFootballPitch = () => {
    const [footballPitch, setFootballPitch] = React.useState({
        name: '',
        address: '',
        contactNumber: '',
        pricePerHour: ''
    });

    const { name, address, contactNumber, pricePerHour } = footballPitch;

    const handleChange = e => {
        setFootballPitch({ ...footballPitch, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted');
    };

    return (
        <div className='container'>
            <div className='row'>
                <form className='col s12' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className="input-field col s12">
                            <input 
                                placeholder='Name' 
                                type="text"
                                name='name'
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <input 
                                placeholder='Address' 
                                type="text"
                                name='address'
                                value={address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <input 
                                placeholder='Contact number' 
                                type="text"
                                name='contactNumber'
                                value={contactNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <input 
                                placeholder='Price per hour' 
                                type="number"
                                name='pricePerHour'
                                value={pricePerHour}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type='submit' className="waves-effect waves-light btn-large">book</button>
                </form>
            </div>
        </div>
    );
};