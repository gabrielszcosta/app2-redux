const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_SUCCESS':
      console.tron.log(action);
      return [...state, action.payload.data];

    case 'REMOVE_FAVORITE':
      return state.filter((favorite) => favorite.id !== action.payload.id);
    default:
      return state;
  }
}
