import { StackNavigator } from 'react-navigation';
import Repositories from '../../containers/Repositories';
import Tabs from '../TabNavigator';

const Stack = StackNavigator({
  Home: {
    screen: Repositories,
  },
  Detail: {
    screen: Tabs,
  },
});

export default Stack;
