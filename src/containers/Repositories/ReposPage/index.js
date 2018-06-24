import React, { Component } from 'react';
import List from '../../../components/Elements/List';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

class ReposPage extends Component {
  componentDidMount() {
    const { onGetRepos } = this.props;
    onGetRepos('microsoft');
  }

  changeRepos = user => {
    const { onGetRepos } = this.props;
    onGetRepos(user);
  };

  render() {
    const { repos } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detail')}
        >
          <Text style={styles.link}>Go new screen</Text>
        </TouchableOpacity>
        <TextInput onChangeText={this.changeRepos} />
        <List data={repos} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    color: 'green',
    fontSize: 20,
  },
  field: {
    width: 200,
  },
});

export default ReposPage;
