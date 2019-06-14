const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, loading: true };

    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload.data],
      };

    case 'ADD_FAVORITE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        data: state.data.filter(
          (favorite) => favorite.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}
