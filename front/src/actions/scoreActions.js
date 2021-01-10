import {
  REQUEST_SCORE_DATA,
  TOGGLE_SCORE_LOADER,
  REQUEST_SCORE_DATA_SUCCESS,
  ADD_SCORE,
} from './types';

/**
 * Action creator to request score data
 */
export const requestScoreData = () => ({
  type: REQUEST_SCORE_DATA,
});

/**
 * Action creator to show/hide score loader
 * @param {boolean} show - show or hide the loader
 */
export const toggleScoreLoader = (show) => ({
  type: TOGGLE_SCORE_LOADER,
  payload: show,
});

/**
 * Action creator for success score data request
 * @param {object} data - score data
 */
export const requestScoreDataSuccess = (data) => ({
  type: REQUEST_SCORE_DATA_SUCCESS,
  payload: data,
});

/**
 * Action creator to add new score
 * @param {object} currentGame - current game data
 */
export const addScore = (currentGame) => ({
  type: ADD_SCORE,
  payload: currentGame,
});
