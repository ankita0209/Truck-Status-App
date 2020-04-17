const totalTrucks = [];
export default function totalTruck(state = totalTrucks, action) {
  switch (action.type) {
    case 'GET_TOTAL_TRUCKS':
      return [
        ...totalTrucks,
        ...action.data
      ];
    default:
      return state;
  }
}