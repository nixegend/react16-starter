import { connect } from 'react-redux';
import Users from '../components/Users';
import { loadUsersList, removeUser } from '../redux/actionCreators';

const mapStateToProps = (state) => ({
  users: state.usersList,
});

const mapDispatchToProps = (dispatch) => ({
  removeUser: (id) => dispatch(removeUser(id)),
  loadUsersList: () => dispatch(loadUsersList()),
});

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default UsersContainer;
