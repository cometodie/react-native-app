import { combineReducers } from 'redux';
import { NavigationState } from 'react-navigation';

import repositoriesReducer, { RepositoryState } from './repositoriesReducer';
import navReducer from './navigationReducer';

export interface State {
  repositories: RepositoryState;
  nav: NavigationState;
}

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  nav: navReducer,
});

export default rootReducer;
