export const addFavoriteRequest = (repository) => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

export const addFavoriteSuccess = (data) => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});

export const addFavoriteFailure = (error) => ({
  type: 'ADD_FAVORITE_FAILURE',
  payload: { error },
});

export const removeFavorite = (id) => ({
  type: 'REMOVE_FAVORITE',
  payload: { id },
});
