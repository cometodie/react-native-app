import React, { Component } from 'react';
import List from 'components/Elements/List';
import Repository from 'models/Repository';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import styles from './style';

interface Props {
  repos: Repository[];
  isLoading: boolean;
  onGetRepos: (user: string) => void;
  onNavigate: (routeName: string) => void;
}

interface State {
  reposName: string;
}

class ReposPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { reposName: 'microsoft' };
  }
  componentDidMount() {
    const { onGetRepos } = this.props;
    const { reposName } = this.state;
    onGetRepos(reposName);
  }

  changeRepos = (user: string) => {
    const { onGetRepos } = this.props;
    onGetRepos(user);
  };

  render() {
    const { repos, onNavigate, isLoading } = this.props;
    const { reposName } = this.state;
    return (
      <ScrollView style={styles.scrollContainer}>
        <ImageBackground
          source={require('./images/github.png')}
          resizeMode="contain"
          style={{
            flex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.2,
            position: 'absolute',
          }}
        />

        <View>
          <TouchableOpacity onPress={() => onNavigate('Detail')}>
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
            <List data={repos} />
          )}
        </View>
      </ScrollView>
    );
  }
}

export default ReposPage;
