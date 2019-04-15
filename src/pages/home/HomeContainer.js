import { connect } from 'react-redux';

import Home from './components/Home';

const mapStateToProps = state => ({
  locale: state.common.locale
});

// const mapDispatchToProps = (dispatch) => ({});
const mapDispatchToProps = {};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
