import React, { Component } from 'react';
import List from '../../../components/Elements/List';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import styles from './style';

class ReposPage extends Component {
  constructor() {
    super();
    this.state = { reposName: 'microsoft' };
  }
  componentDidMount() {
    const { onGetRepos } = this.props;
    const { reposName } = this.state;
    onGetRepos(reposName);
  }

  changeRepos = user => {
    const { onGetRepos } = this.props;
    onGetRepos(user);
  };

  render() {
    const { repos, isLoading } = this.props;
    const { reposName } = this.state;
    return (
      <ScrollView style={styles.scrollContainer}>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Detail')}
          >
            <Text style={styles.link}>Go new screen</Text>
          </TouchableOpacity>
          <TextInput onChangeText={this.changeRepos} defaultValue={reposName} />
          {isLoading ? (
            <ActivityIndicator
              style={{ marginTop: 50 }}
              size="large"
              color="#0000ff"
            />
          ) : (
            <List data={repos} renderItem={this.renderItem} />
          )}
        </View>
      </ScrollView>
    );
  }
}

export default ReposPage;
