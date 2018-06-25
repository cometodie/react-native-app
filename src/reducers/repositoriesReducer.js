import {
  GET_REPOS,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAIL,
} from '../actions/repositoriesAction';

const initState = {
  repos: [],
  loading: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.data };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories',
      };
    default:
      return state;
  }
}
