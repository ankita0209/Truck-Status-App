//Import outside modules
import React, { Fragment } from 'react';
import { connect } from "react-redux";
//Import inside modules
import Tab from '../common/tab';
import SelectTab from '../common/select';
import { getFilterTrucks } from '../actions/truckAction';

function Header(props) {
    const { state, setState, totalTrucks, runningTrucks, stoppedTrucks, idleTrucks, errorTrucks, getFilterTrucks } = props;
    const selector = (selectedOption) => {
        let filterTrucks = [];
        selectedOption && selectedOption.forEach(element => {
            totalTrucks.forEach((truck) => {
                const { truckNumber } = truck;
                if(truckNumber.indexOf(element.value) !==-1){
                    filterTrucks.push(truck)
                }
            })
        });
        
        setState('filtered');
        getFilterTrucks(filterTrucks);
    }
    return (
        <Fragment>
            <div className="App-header">
                <Tab tile="Total Trucks" count={totalTrucks.length} actualState={state} state="total" setState={setState}/>
                <Tab tile="Running Trucks" count={runningTrucks.length} actualState={state} state="running" setState={setState}/>
                <Tab tile="Stopped Trucks" count={stoppedTrucks.length} actualState={state} state="stopped" setState={setState}/>
                <Tab tile="Idle Trucks" count={idleTrucks.length} actualState={state} state="idle" setState={setState}/>
                <Tab tile="Error Trucks" count={errorTrucks.length} actualState={state} state="error" setState={setState}/>
                <SelectTab selector={selector} options={totalTrucks.map((truck)=> ({
                    label: truck.truckNumber,
                    value: truck.truckNumber
                }))} />
            </div>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        totalTrucks: state.totalTruck,
        runningTrucks: state.runningTruck,
        stoppedTrucks: state.stoppedTruck,
        idleTrucks: state.idleTruck,
        errorTrucks: state.errorTruck
    }
}

export default connect(
    mapStateToProps,
    {getFilterTrucks}
)(Header);
