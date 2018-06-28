import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Map from '../../components/Elements/Map';

const Tabs = TabNavigator({
  RepoList: {
    screen: () => (
      <Text>test</Text  >
      // <Map
      //   latitude={53.9086855}
      //   longitude={27.57513778}
      //   latitudeDelta={0.1}
      //   longitudeDelta={0.1}
      // />
    ),
  },
  Profile: {
    screen: () => <Text>Second tab</Text>,
  },
});

export default Tabs;
