import { combineReducers } from 'redux';

import repositoriesReducer from './repositoriesReducer';
import navReducer from './navigationReducer';

const rootReducer = combineReducers({
  repositoriesReducer,
  nav: navReducer,
});

export default rootReducer;
