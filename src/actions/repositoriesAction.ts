import createObjectAction from './createObjectAction';
import Repository from '../models/Repository';

export const GET_REPOS = '@/repos/LOAD';
export const GET_REPOS_SUCCESS = '@/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = '@/repos/LOAD_FAIL';

export interface GetRepos {
  type: typeof GET_REPOS;
  user: string;
}

interface SuccessRepos {
  type: typeof GET_REPOS_SUCCESS;
  data: Repository[];
}

interface FailRepos {
  type: typeof GET_REPOS_FAIL;
  error: Error;
}

export type ReposActions = GetRepos | SuccessRepos | FailRepos;

const listRepos = (user: string) => {
  return createObjectAction(GET_REPOS, {
    user,
  });
};

export default listRepos;
