import { all, fork } from 'redux-saga/effects';
import { watchLoadRepos } from './reposSaga';

export default function* root() {
  yield all([fork(watchLoadRepos)]);
}
