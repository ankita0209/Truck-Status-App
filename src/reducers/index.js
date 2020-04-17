import { combineReducers } from 'redux';
import errorTruck from './errorTruck';
import idleTruck from './idleTruck';
import runningTruck from './runningTruck';
import stoppedTruck from './stoppedTruck';
import totalTruck from './totalTruck';

export default combineReducers({
  errorTruck,
  idleTruck,
  runningTruck,
  stoppedTruck,
  totalTruck
});