//Import outside modules
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
//Import inside modules
import { GOOGLE_API_KEY } from '../config';
import { connect } from 'react-redux';

function MapContainer(props) {

    const { state, runningTrucks, stoppedTrucks, idleTrucks, errorTrucks, filterTrucks } = props;

    return (
         <Map
          google={props.google}
          zoom={7}
          initialCenter={{ lat: 31.363203048706055, lng: 75.38447570800781}}
        >
          {(state === 'total' || state === 'running') ? runningTrucks.map((truck, id) => {
            const { lastWaypoint: {lat, lng} } = truck;
            return <Marker key={id} position={{ lat, lng }} icon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png" />
          }):null}
          {(state === 'total' || state === 'stopped') ? stoppedTrucks.map((truck, id) => {
            const { lastWaypoint: {lat, lng} } = truck;
            return <Marker key={id} position={{ lat, lng }} icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"/>
          }):null}
          {(state === 'total' || state === 'idle') ? idleTrucks.map((truck, id) => {
            const { lastWaypoint: {lat, lng} } = truck;
            return <Marker key={id} position={{ lat, lng }} icon = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"/>
          }):null}
          {(state === 'total' || state === 'error') ? errorTrucks.map((truck, id) => {
            const { lastWaypoint: {lat, lng} } = truck;
            return <Marker key={id} position={{ lat, lng }} icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"/>
          }):null}
          {(state === 'filtered') ? filterTrucks.map((truck, id) => {
            const { lastWaypoint: {lat, lng} } = truck;
            return <Marker key={id} position={{ lat, lng }} icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"/>
          }):null}
        </Map>
    );
}

const mapStateToProps = (state) => {
  return {
      runningTrucks: state.runningTruck,
      stoppedTrucks: state.stoppedTruck,
      idleTrucks: state.idleTruck,
      errorTrucks: state.errorTruck,
      filterTrucks: state.filterTrucks
  }
}

const MapContainerwithState = connect(
  mapStateToProps,
  null
)(MapContainer);

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(MapContainerwithState)