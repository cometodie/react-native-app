import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Text } from 'react-native';

class Tabs extends React.Component {
  getTabs = () => {
    const { tabs } = this.props;

  };

  render() {
    return TabNavigator({ ...tabs });
  }
}

// const Tabs = TabNavigator({
//   RepoList: {
//     screen: () => <Text>First tab</Text>,
//   },
//   Profile: {
//     screen: () => <Text>Second tab</Text>,
//   },
// });

export default Tabs;