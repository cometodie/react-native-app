import { connect } from 'react-redux';

import listRepos from '../../actions/repositoriesAction';
import ReposPage from './ReposPage';

const mapStateToProps = state => ({ 
  repos: state.repositoriesReducer.repos,
  isLoading: state.repositoriesReducer.loading, 
});

const mapDispatchToProps = dispatch => ({
  onGetRepos: user => dispatch(listRepos(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReposPage);
