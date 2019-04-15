import { connect } from 'react-redux';
import ModalEntity from './ModalEntity';

const mapStateToProps = state => ({
  locale: state.common.locale
});

// const mapDispatchToProps = (dispatch) => ({});
const mapDispatchToProps = {};

const ModalEntityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEntity);

export default ModalEntityContainer;
