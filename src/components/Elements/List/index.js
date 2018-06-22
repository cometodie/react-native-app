import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class List extends Component {
  renderItem = ({ item }) => (
    <View>
      <Text key={item.id}>{item.name}</Text>
    </View>
  );
  render() {
    const { data, ...other } = this.props;
    return <FlatList {...other} data={data} renderItem={this.renderItem} />;
  }
}
