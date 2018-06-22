import { GET_REPOS } from '../reducers/repositoriesReducer';
import createObjectAction from './createObjectAction';

const listRepos = user => {
  return createObjectAction(GET_REPOS, {
    user,
  });
};

export default listRepos;
