import createObjectAction from './createObjectAction';

export const GET_REPOS = '@/repos/LOAD';
export const GET_REPOS_SUCCESS = '@/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = '@/repos/LOAD_FAIL';

export default (listRepos = user => {
  return createObjectAction(GET_REPOS, {
    user,
  });
});
