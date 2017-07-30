import * as types from './app.types';
import * as actions from './app.actions';

const middlewares = store => next => (action) => {
  const { dispatch } = store;
  switch (action.type) {
    case types.CHANGE_TITLE: {
      dispatch(actions.loading(true));
      setTimeout(() => {
        dispatch(actions.loading(false));
        next({
          ...action,
          title: `${action.title} @*#&@*#&`,
        });
      }, 1000);
      break;
    }
    default: { next(action); }
  }
};

export default middlewares;
