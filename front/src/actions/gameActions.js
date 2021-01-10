import {
  REQUEST_GAME,
  TOGGLE_GAME_LOADER,
  REQUEST_GAME_SUCCESS,
  MAKE_MOVE,
  TOGGLE_MOVE_LOADER,
  MAKE_MOVE_SUCCESS,
  RESET_GAME,
  START_NEXT_GAME,
  WRITE_GAME_LOG,
} from './types';

/**
 * Action creator to request game data
 */
export const requestGame = () => ({
  type: REQUEST_GAME,
});

/**
 * Action creator to show/hide game loader
 * @param {boolean} show - show or hide the loader
 */
export const toggleGameLoader = (show) => ({
  type: TOGGLE_GAME_LOADER,
  payload: show,
});

/**
 * Action creator for success game request
 * @param {object} data - data of the game
 */
export const requestGameSuccess = (data) => ({
  type: REQUEST_GAME_SUCCESS,
  payload: data,
});

/**
 * Action creator make move
 * @param {object} payload - info about cell
 * @param {number} payload.index - index of the cell
 */
export const makeMove = (payload) => ({
  type: MAKE_MOVE,
  payload,
});

/**
 * Action creator to show/hide move loader
 * @param {boolean} show - show or hide the loader
 */
export const toggleMoveLoader = (show) => ({
  type: TOGGLE_MOVE_LOADER,
  payload: show,
});

/**
 * Action creator for success move
 * @param {object} data - data of the game
 */
export const makeMoveSuccess = (data) => ({
  type: MAKE_MOVE_SUCCESS,
  payload: data,
});

/**
 * Action creator to reset current game
 */
export const resetGame = () => ({
  type: RESET_GAME,
});

/**
 * Action creator to start new game
 */
export const startNextGame = () => ({
  type: START_NEXT_GAME,
});

/**
 * Action creator saving move info in log
 * @param {object[]} payload - array of moves data
 * @param {string} payload[].who - who made the move
 * @param {number} payload[].index - index of the board cell
 * @param {string} payload[].sign - sign ('O'|'X')
 */
export const writeGameLog = (payload) => ({
  type: WRITE_GAME_LOG,
  payload,
});
