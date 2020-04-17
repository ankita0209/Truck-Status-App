//Import outside modules
import React from 'react';

function Select(props) {
    return (
        <div className="Header-tab" >
            <select className="Header-select-tab">
                <option>Select</option>
                {props.options.map((option) => <option value={option.value}>{option.title}</option>)}
            </select>
        </div>
    );
}

export default Select;