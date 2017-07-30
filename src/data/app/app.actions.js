import * as types from './app.types';
import * as helpers from './app.helpers';

export const loading = isLoading => ({
  type: isLoading ? types.LOADING : types.LOADED,
});

export const changeTitle = title => ({
  type: types.CHANGE_TITLE,
  title: helpers.toUpperCase(title),
});
