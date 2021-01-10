import { SET_ERROR } from '../actions/types';

const initialState = {
  errorMessage: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
