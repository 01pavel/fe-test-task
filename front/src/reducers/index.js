import { combineReducers } from 'redux';
import { gameReducer } from './gameReducer';
import { appReducer } from './appReducer';
import { scoreReducer } from './scoreReducer';

export default combineReducers({
  app: appReducer,
  game: gameReducer,
  score: scoreReducer,
});
