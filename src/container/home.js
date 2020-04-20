//Import Outside modules
import React, { Fragment, useState, useEffect  } from 'react';
import { connect } from "react-redux";
//Import Inner modules
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import MapContainer from '../components/mapContainer';
import { getAllTrucks } from '../actions/truckAction';

function Home(props) {
    const [state, setState] = useState("total");
    const { getAllTrucks } = props;

    useEffect(() => {
        getAllTrucks();
    },[getAllTrucks]);

    return (
        <Fragment>
            <Header state={state} setState={setState}/>
            <div className="App-content">
                <div className="Sidebar-container">
                    <Sidebar state={state} setState={setState}/>
                </div>
                <div className="Map-container">
                    <MapContainer state={state}/>
                </div>
            </div>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        totalTrucks: state.totalTruck,
        runningTrucks: state.runningTruck
    }
}

export default connect(
    mapStateToProps,
    { getAllTrucks }
)(Home);
