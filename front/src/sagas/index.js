import { all } from 'redux-saga/effects';
import gameSagas from './gameSagas';
import scoreSagas from './scoreSagas';

export default function* rootSaga() {
  yield all([gameSagas(), scoreSagas()]);
}
