//Import inside modules
import { API_URL } from '../config';

export function getAllTrucks() {
  return (dispatch) => {
    return fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: 'GET_TOTAL_TRUCKS',
          data: data.data
        });
        dispatch({
          type: 'GET_RUNNING_TRUCKS',
          data: data.data.filter((truck) => {
                  const { lastRunningState : { truckRunningState }} = truck;
                  return truckRunningState;
                })
        });
        dispatch({
          type: 'GET_STOPPED_TRUCKS',
          data: data.data.filter((truck) => {
                  const { lastRunningState : { truckRunningState },  lastWaypoint : { ignitionOn }} = truck;
                  return !(truckRunningState && ignitionOn);
              })
        });
        dispatch({
          type: 'GET_IDLE_TRUCKS',
          data: data.data.filter((truck) => {
                  const { lastRunningState : { truckRunningState }, lastWaypoint : { ignitionOn }} = truck;
                  return (ignitionOn && !truckRunningState);
              })
        });
        dispatch({
          type: 'GET_ERROR_TRUCKS',
          data: data.data.filter((truck) => {
                  const { lastWaypoint : {createTime}} = truck;
                  const currentTime = Math.floor(Date.now());
                  let difference = (currentTime - createTime)/1000/60/60;
                  return difference >= 4;
              })
        });
      });
  }
}

export function getFilterTrucks(data) {
  return (dispatch) => {
    return dispatch({
      type: 'GET_FILTER_TRUCKS',
      data: data
    })
  }
}  