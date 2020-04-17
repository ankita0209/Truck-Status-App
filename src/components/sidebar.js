//Import outside modules
import React, { Fragment } from 'react';
import { connect } from "react-redux";

function Sidebar(props) {

    const { state, runningTrucks, stoppedTrucks, idleTrucks, errorTrucks } = props;

    const getTrucks = () => {
        let trucks = [];
        if(state === 'running'){
            trucks = runningTrucks;
        } else if(state === 'stopped'){
            trucks = stoppedTrucks;
        } else if(state === 'idle'){
            trucks = idleTrucks;
        } else if(state === 'total'){;
            trucks = [...runningTrucks, ...stoppedTrucks, ...idleTrucks, ...errorTrucks]
        }
        return trucks;
    }

    return (
        <Fragment>
            {getTrucks().map((truck) => {
            const { truckNumber, lastWaypoint: {speed}} =  truck;
            return <div className="Truck-detail">
                <div className="Left-float">
                    <span>{truckNumber}</span>
                </div>
                <div className="Right-float">
                    <span>{speed}k/h</span>
                </div>
            </div>})}
            {(state ==='total' || state === 'error') ? errorTrucks.map((truck) => {
            const { truckNumber, lastWaypoint: {speed}} =  truck;
            return <div className="Truck-detail Red-background">
                <div className="Left-float">
                    <span>{truckNumber}</span>
                </div>
                <div className="Right-float">
                    <span>{speed}k/h</span>
                </div>
            </div>}):null}
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
)(Sidebar);
