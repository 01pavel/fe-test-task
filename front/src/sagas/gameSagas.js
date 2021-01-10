import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';
import {
  REQUEST_GAME,
  RESET_GAME,
  START_NEXT_GAME,
  MAKE_MOVE,
} from '../actions/types';
import {
  toggleGameLoader,
  requestGameSuccess,
  makeMoveSuccess,
  toggleMoveLoader,
  writeGameLog,
} from '../actions/gameActions';
import { setError } from '../actions/appActions';
import { addScore } from '../actions/scoreActions';

// Get game
export function* watchGetGame() {
  yield takeEvery(REQUEST_GAME, getGameWorker);
}

export function* getGameWorker() {
  try {
    yield put(toggleGameLoader(true));
    const response = yield call(fetchGame);
    yield put(requestGameSuccess(response.result));
  } catch (error) {
    yield put(setError((error && error.message) || 'something went wrong'));
  } finally {
    yield put(toggleGameLoader(false));
  }
}

async function fetchGame() {
  const response = await fetch('/api/game');
  return await response.json();
}

// Make moove
const getGame = (state) => state.game;

const getMoveCellIndex = (prevBoard, board, sign) => {
  for (let i = 0; i < board.length; i++) {
    let line = board[i];

    for (let j = 0; j < line.length; j++) {
      let currentItem = line[j];
      if (prevBoard) {
        let prevItem = prevBoard[i][j];
        if (currentItem === sign && currentItem !== prevItem) {
          return { cellIndex: prevItem, value: currentItem };
        }
      } else {
        if (typeof currentItem === 'string') {
          return { cellIndex: i * line.length + j + 1, value: currentItem };
        }
      }
    }
  }
};

export function* watchMakeMove() {
  yield takeEvery(MAKE_MOVE, makeMoveWorker);
}

export function* makeMoveWorker(action) {
  try {
    yield put(toggleMoveLoader(true));
    const game = yield select(getGame);
    const newLogItems = [
      {
        who: 'player',
        index: action.payload.index,
        sign: game.currentGame.player,
      },
    ];
    const response = yield call(() => postMove(action.payload));
    yield put(makeMoveSuccess(response.result));

    if (response.result.end) {
      // add data to scores
      yield put(addScore({ ...response.result, ts: Date.now() }));
    }

    const aiMoveIndex = getMoveCellIndex(
      game.currentGame.board,
      response?.result?.board,
      game.currentGame.ai,
    );
    if (aiMoveIndex) {
      newLogItems.push({
        who: 'ai',
        index: aiMoveIndex.cellIndex,
        sign: game.currentGame.ai,
      });
    }
    yield put(writeGameLog(game.gameLog.concat(newLogItems)));
  } catch (error) {
    yield put(setError((error && error.message) || 'something went wrong'));
  } finally {
    yield put(toggleMoveLoader(false));
  }
}

async function postMove(payload) {
  const response = await fetch('/api/game/move', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

// Reset game
export function* watchResetGame() {
  yield takeEvery(RESET_GAME, resetGameWorker);
}

export function* resetGameWorker() {
  try {
    yield put(toggleGameLoader(true));
    const response = yield call(resetGame);
    yield put(requestGameSuccess(response.result));
    yield put(writeGameLog([]));
  } catch (error) {
    yield put(setError((error && error.message) || 'something went wrong'));
  } finally {
    yield put(toggleGameLoader(false));
  }
}

async function resetGame() {
  const response = await fetch('/api/game/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

// Start next game
export function* watchStartNextGame() {
  yield takeEvery(START_NEXT_GAME, startNextGameWorker);
}

export function* startNextGameWorker() {
  try {
    yield put(toggleGameLoader(true));
    const response = yield call(startNextGame);
    yield put(requestGameSuccess(response.result));

    const newGame = response?.result;
    const aiMoveIndex = getMoveCellIndex(null, newGame.board, newGame.ai);
    yield put(
      writeGameLog(
        aiMoveIndex
          ? [
              {
                who: 'ai',
                index: aiMoveIndex.cellIndex,
                sign: newGame.ai,
              },
            ]
          : [],
      ),
    );
  } catch (error) {
    yield put(setError((error && error.message) || 'something went wrong'));
  } finally {
    yield put(toggleGameLoader(false));
  }
}

async function startNextGame() {
  const response = await fetch('/api/game/next');
  return await response.json();
}

export default function* rootSaga() {
  yield all([
    fork(watchGetGame),
    fork(watchMakeMove),
    fork(watchResetGame),
    fork(watchStartNextGame),
  ]);
}
