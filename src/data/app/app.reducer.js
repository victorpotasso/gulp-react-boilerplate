import * as types from './app.types';

const initialState = {
  title: 'App with Redux!',
  isUpdated: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TITLE: {
      return Object.assign(
        {},
        state,
        {
          title: action.title,
          isUpdated: true,
        },
      );
    }
    case types.LOADING: {
      return Object.assign(
        {},
        state,
        {
          isLoading: true,
        },
      );
    }
    case types.LOADED: {
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
        },
      );
    }
    default: { return state; }
  }
}
