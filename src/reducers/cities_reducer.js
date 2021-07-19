const citiesReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  switch (action.type) {
    case 'SET_FLATS':
      return action.payload;
    default:
      return state;
  }
  // TODO: handle some actions
};

export default citiesReducer;
