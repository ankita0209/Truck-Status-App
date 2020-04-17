//Import outside modules
import React from 'react';

function Tab(props) {
    const { state, setState, actualState } = props;
    return (
        <div className={ state === actualState ? "Header-tab Background" : "Header-tab" } onClick={()=> props.setState(props.state)}>
            <div>{props.tile}</div>
            <div>{props.count}</div>
        </div>
    );
}

export default Tab;
