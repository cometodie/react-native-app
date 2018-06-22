import { TabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Text } from 'react-native';

const Tabs = TabNavigator({
  RepoList: {
    screen: () => <Text>First tab</Text>,
  },
  Profile: {
    screen: () => <Text>Second tab</Text>,
  },
});

export default Tabs;
