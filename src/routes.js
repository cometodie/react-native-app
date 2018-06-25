import { createStackNavigator } from 'react-navigation';
import Repositories from './containers/Repositories';
import Tabs from './navigation/Tabs';

const AppRouteConfigs = {
  Home: {
    screen: Repositories,
  },
  Detail: {
    screen: Tabs,
  },
};

export default createStackNavigator(AppRouteConfigs);
