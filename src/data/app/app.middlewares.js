import * as types from './app.types';

const middlewares = store => next => (action) => {
  switch (action.type) {
    case types.CHANGE_TITLE: {
      next({
        ...action,
        title: `${action.title} @*#&@*#&`,
      });
      break;
    }
    default: { next(action); }
  }
};

export default middlewares;
