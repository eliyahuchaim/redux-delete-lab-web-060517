let id = 0;

export default function manageBand(state = {bands: [] }, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      const Band = Object.assign({}, action.band, {id: id} )
      return { bands: state.bands.concat(Band) }
    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => {
        return band.id !== action.id
      })}
    default:
      return state;
  }
};
