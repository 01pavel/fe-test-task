import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_SCORE_DATA } from '../actions/types';
import {
  toggleScoreLoader,
  requestScoreDataSuccess,
} from '../actions/scoreActions';
import { setError } from '../actions/appActions';

// Get score data
export function* watchGetScoreData() {
  yield takeEvery(REQUEST_SCORE_DATA, getScoreDataWorker);
}

export function* getScoreDataWorker() {
  try {
    yield put(toggleScoreLoader(true));
    const response = yield call(fetchScoreData);
    yield put(requestScoreDataSuccess(response.result));
  } catch (error) {
    yield put(setError((error && error.message) || 'something went wrong'));
  } finally {
    yield put(toggleScoreLoader(false));
  }
}

async function fetchScoreData() {
  const response = await fetch('/api/score');
  return await response.json();
}

export default function* rootSaga() {
  yield all([fork(watchGetScoreData)]);
}
