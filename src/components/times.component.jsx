import React from 'react';
import M from 'materialize-css/dist/js/materialize';

export const Times = () => {

    const [times, setTimes] = React.useState([]);

    const handleChange = e => {
        const options = e.target.options;
        const selectedOptions = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedOptions.push(options[i])
            }
        }
        const selectedTimes = selectedOptions.map(option => option.value);
        setTimes(selectedTimes);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(times);
    };

    return (
        <div className='container'>
            <div className='row'>
                <form className='col s12' onSubmit={handleSubmit}>
                    <select multiple value={times} onChange={handleChange}>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                    <button type='submit'>Book</button>
                </form>
            </div>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});