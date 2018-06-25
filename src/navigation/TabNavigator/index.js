import { TabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';

const Tabs = TabNavigator({
  RepoList: {
    screen: () => <ActivityIndicator size="large" color="#0000ff" />,
  },
  Profile: {
    screen: () => <Text>Second tab</Text>,
  },
});

export default Tabs;
