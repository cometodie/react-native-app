import React, { Component } from 'react';
import { Text, FlatList, ListRenderItemInfo } from 'react-native';
import ListItem from 'models/ListItem';

import style from './style';

interface Props {
  data: Array<ListItem>;
}

export default class List extends Component<Props> {
  renderItem = ({ item }: ListRenderItemInfo<ListItem>) => (
    <Text style={style.item} key={item.id}>{item.name}</Text>
  );
  render() {
    const { data, ...other } = this.props;
    return <FlatList {...other} data={data} renderItem={this.renderItem} />;
  }
}
