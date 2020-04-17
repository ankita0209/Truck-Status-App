const errorTrucks = [];
export default function errorTruck(state = errorTrucks, action) {
  switch (action.type) {
    case 'GET_ERROR_TRUCKS':
      return [
        ...errorTrucks,
        ...action.data
      ];
    default:
      return state;
  }
}