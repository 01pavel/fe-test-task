import {
  REQUEST_SCORE_DATA_SUCCESS,
  TOGGLE_SCORE_LOADER,
  ADD_SCORE,
} from '../actions/types';

const initialState = {
  scoreData: null,
  isScoreLoading: false,
};

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SCORE_LOADER:
      return { ...state, isScoreLoading: action.payload };
    case REQUEST_SCORE_DATA_SUCCESS:
      return { ...state, scoreData: action.payload };
    case ADD_SCORE: {
      const { scoreData } = state;

      if (!scoreData) {
        return state;
      }

      let list = scoreData?.list || [];
      const { payload } = action;

      let newScoreItem = { ts: payload.ts };

      if (payload.winner) {
        newScoreItem = {
          ...newScoreItem,
          winner: payload.winner,
          team: payload[payload.winner],
        };

        state.scoreData[payload.winner] += 1;
        state.scoreData[payload[payload.winner]] += 1;
      }

      return {
        ...state,
        scoreData: { ...state.scoreData, list: [...list, newScoreItem] },
      };
    }
    default:
      return state;
  }
};
