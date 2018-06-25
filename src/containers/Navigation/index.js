import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import routes from '../../routes';

const App = reduxifyNavigator(routes, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(App);
