import * as types from './app.types';
import * as actions from './app.actions';
import * as selectors from './app.selectors';

const middlewares = store => next => (action) => {
  const { dispatch, getState } = store;
  switch (action.type) {
    case types.CHANGE_TITLE: {
      if (selectors.isUpdated(getState())) {
        window.alert('it`s already updated!');
      } else {
        dispatch(actions.loading(true));
        setTimeout(() => {
          dispatch(actions.loading(false));
          next({
            ...action,
            title: `${action.title} @*#&@*#&`,
          });
        }, 1000);
      }
      break;
    }
    default: { next(action); }
  }
};

export default middlewares;
