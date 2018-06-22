import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL,
} from '../reducers/repositoriesReducer';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watchLoadRepos() {
  yield takeLatest(GET_REPOS, workerSaga);
}

function getRepositories(user) {
  return axios({
    method: 'GET',
    baseURL: `https://api.github.com/users/${user}/repos`,
    responseType: 'json',
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  const { user } = action;
  try {
    const response = yield call(getRepositories, user);
    // dispatch a success action to the store with the new dog
    yield put({ type: GET_REPOS_SUCCESS, data: response.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_REPOS_FAIL, error });
  }
}
