import { SET_ERROR } from './types';

/**
 * Action creator to show notifications
 * @param {string} message - notification message
 */
export const setError = (message) => ({
  type: SET_ERROR,
  payload: message,
});
