//Import outside modules
import React, { Fragment } from 'react';
import { connect } from "react-redux";
//Import inside modules
import { getFilterTrucks } from '../actions/truckAction';

function Sidebar(props) {
    const { state, setState, filterTrucks, runningTrucks, stoppedTrucks, idleTrucks, errorTrucks, getFilterTrucks } = props;

    const getTrucks = () => {
        let trucks = [];
        if(state === 'running'){
            trucks = runningTrucks;
        } else if(state === 'stopped'){
            trucks = stoppedTrucks;
        } else if(state === 'idle'){
            trucks = idleTrucks;
        } else if(state === 'error'){;
            trucks = errorTrucks
        } else if(state === 'filtered'){;
            trucks = filterTrucks
        } else if(state === 'total'){;
            trucks = [...runningTrucks, ...stoppedTrucks, ...idleTrucks, ...errorTrucks]
        }
        return trucks;
    }

    const timeConverter = (time) => {
        const currentTime = Math.floor(Date.now());
        let min = Math.floor((currentTime - time)/1000/60);
        let hr = Math.floor((currentTime - time)/1000/60/60);
        const days = Math.floor(hr/24);
        return (days ? `${days} d` : hr ? `${hr} hr`:`${min} min`);
    }

    const filterAction = (e) => {
        const filterTrucks = getTrucks().filter((truck) => {
            const { truckNumber } = truck;
            return truckNumber.indexOf(e.target.value) !==-1? true: false;
        })
        setState('filtered');
        getFilterTrucks(filterTrucks);
    }


    return (
        <Fragment>
            <div>
                <input 
                    type="text" 
                    placeholder="Search Trucks" 
                    className="Sidebar-search-box" 
                    onChange={(e) => filterAction(e)}/>
            </div>
            {getTrucks().map((truck,id) => {
            const { truckNumber, lastRunningState:{stopStartTime, truckRunningState}, lastWaypoint: {createTime, speed }} =  truck;
            return <div key={id} className="Truck-detail">
                <div className="Left-float">
                    <b className="Display-block">{truckNumber}</b>
                    <small className="Display-block">
                        {truckRunningState ? "ruuning " : "stopped "}
                        {"since last "}
                        {timeConverter(stopStartTime)}
                    </small>
                </div>
                {truckRunningState ? <div className="Right-float">
                    <small className="Display-block">{speed}k/h</small>
                    <small className="Display-block">{timeConverter(createTime)}</small>
                </div> : null}
            </div>})}
            {(state ==='total' || state === 'error') ? errorTrucks.map((truck, id) => {
            const { truckNumber, lastRunningState:{truckRunningState}, lastWaypoint: {speed}} =  truck;
            return <div key={id} className="Truck-detail Red-background">
                 <div className="Left-float">
                    <b className="Display-block">{truckNumber}</b>
                    <small className="Display-block">
                        {truckRunningState ? "ruuning " : "stopped "}
                        {"since last "}
                    </small>
                </div>
                {truckRunningState ? <div className="Right-float">
                    <small>{speed}k/h</small>
                </div> : null}
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
        errorTrucks: state.errorTruck,
        filterTrucks: state.filterTrucks
    }
}


export default connect(
    mapStateToProps,
    {getFilterTrucks}
)(Sidebar);
