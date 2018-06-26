import { connect } from 'react-redux';
import { NavigationActions, NavigationNavigateAction } from 'react-navigation';
import listRepos, { ReposActions } from '../../actions/repositoriesAction';
import ReposPage from './ReposPage';
import { State } from '../../reducers';
import { Dispatch } from 'redux';
import Repository from '../../models/Repository';

interface StateFromProps {
  repos: Repository[];
  isLoading: boolean;
}

interface DispatchFromProps {
  onGetRepos: (user: string) => void;
  onNavigate: (routeName: string) => void;
}

const mapStateToProps = (state: State): StateFromProps => ({
  repos: state.repositories.repos,
  isLoading: state.repositories.loading,
});

const mapDispatchToProps = (
  dispatch: Dispatch<ReposActions | NavigationNavigateAction>,
): DispatchFromProps => ({
  onGetRepos: (user: string) => dispatch(listRepos(user)),
  onNavigate: (routeName: string) =>
    dispatch(NavigationActions.navigate({ routeName })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReposPage);
