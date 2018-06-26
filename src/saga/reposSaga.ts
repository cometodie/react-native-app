import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import axios from 'axios';
import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL,
  GetRepos,
} from '../actions/repositoriesAction';

export function* watchLoadRepos(): SagaIterator {
  yield takeLatest(GET_REPOS, workerSaga);
}

function getRepositories(user: string) {
  return axios({
    method: 'GET',
    baseURL: `https://api.github.com/users/${user}/repos`,
    responseType: 'json',
  });
}

function* workerSaga(action: GetRepos) {
  const { user } = action;
  try {
    const response = yield call(getRepositories, user);
    yield put({ type: GET_REPOS_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: GET_REPOS_FAIL, error });
  }
}
