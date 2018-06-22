export const GET_REPOS = 'awesome/repos/LOAD';
export const GET_REPOS_SUCCESS = 'awesome/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'awesome/repos/LOAD_FAIL';

const initState = {
  repos: [],
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
