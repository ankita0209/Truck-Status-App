//Import outside modules
import React, { Fragment } from 'react';
import { connect } from "react-redux";
//Import inside modules
import Tab from '../common/tab';
import Select from '../common/select';

function Header(props) {
    const { totalTrucks, runningTrucks, stoppedTrucks, idleTrucks, errorTrucks } = props;
    return (
        <Fragment>
            <div className="App-header">
                <Tab tile="Total Trucks" count={totalTrucks.length} actualState={props.state} state="total" setState={props.setState}/>
                <Tab tile="Running Trucks" count={runningTrucks.length} actualState={props.state} state="running" setState={props.setState}/>
                <Tab tile="Stopped Trucks" count={stoppedTrucks.length} actualState={props.state} state="stopped" setState={props.setState}/>
                <Tab tile="Idle Trucks" count={idleTrucks.length} actualState={props.state} state="idle" setState={props.setState}/>
                <Tab tile="Error Trucks" count={errorTrucks.length} actualState={props.state} state="error" setState={props.setState}/>
                <Select options={totalTrucks.map((truck)=> ({
                    title: truck.truckNumber,
                    value: truck
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
    null
)(Header);
