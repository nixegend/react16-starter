import { connect } from 'react-redux';
import Test from './Test';

const mapStateToProps = state => ({
  locale: state.common.locale
});

// const mapDispatchToProps = (dispatch) => ({});
const mapDispatchToProps = {};

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

export default TestContainer;
