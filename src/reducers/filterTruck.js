const filterTrucks = [];
export default function filterTruck(state = filterTrucks, action) {
  switch (action.type) {
    case 'GET_FILTER_TRUCKS':
      return [
        ...filterTrucks,
        ...action.data
      ];
    default:
    return state;
  }
}