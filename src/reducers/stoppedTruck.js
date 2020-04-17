const stoppedTrucks = [];
export default function stoppedTruck(state = stoppedTrucks, action) {
  switch (action.type) {
    case 'GET_STOPPED_TRUCKS':
      return [
        ...stoppedTrucks,
        ...action.data
      ];
    default:
      return state;
  }
}