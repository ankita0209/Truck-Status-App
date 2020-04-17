const runningTrucks = [];
export default function runningTruck(state = runningTrucks, action) {
  switch (action.type) {
    case 'GET_RUNNING_TRUCKS':
      return [
        ...runningTrucks,
        ...action.data
      ];
    default:
      return state;
  }
}