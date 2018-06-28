import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './style';

interface Props {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

class Map extends Component<Props> {
  render() {
    console.log(MapView);

    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.props} />
      </View>
    );
  }
}

export default Map;
