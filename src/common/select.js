//Import outside modules
import React from 'react';
import Select from 'react-select';

function SelectTab(props) {
    const { options, selector } = props;
    return (
        <div className="Header-tab" >
            <Select
                // value={selectedOption}
                onChange={selector}
                isMulti={true}
                options={options}
            />
        </div>
    );
}

export default SelectTab;