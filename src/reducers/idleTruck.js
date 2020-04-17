const idleTrucks = [];
export default function idleTruck(state = idleTrucks, action) {
  switch (action.type) {
    case 'GET_IDLE_TRUCKS':
      return [
        ...idleTrucks,
        ...action.data
      ];
    default:
      return state;
  }
}