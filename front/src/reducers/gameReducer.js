import {
  TOGGLE_GAME_LOADER,
  REQUEST_GAME_SUCCESS,
  TOGGLE_MOVE_LOADER,
  MAKE_MOVE_SUCCESS,
  WRITE_GAME_LOG,
} from '../actions/types';

const initialState = {
  currentGame: null,
  isGameLoading: false,
  isMoveMaking: false,
  gameLog: [],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GAME_LOADER:
      return { ...state, isGameLoading: action.payload };
    case REQUEST_GAME_SUCCESS: {
      return { ...state, currentGame: action.payload };
    }
    case TOGGLE_MOVE_LOADER:
      return { ...state, isMoveMaking: action.payload };
    case MAKE_MOVE_SUCCESS:
      return { ...state, currentGame: action.payload };
    case WRITE_GAME_LOG:
      return { ...state, gameLog: action.payload };
    default:
      return state;
  }
};
