import * as types from './app.types';
import * as helpers from './app.helpers';

export const changeTitle = title => ({
  type: types.CHANGE_TITLE,
  title: helpers.toUpperCase(title),
});
