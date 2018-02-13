import React from 'react';

class Users extends React.Component {
  componentWillMount() {
    this.props.loadUsersList();
  }

  render() {
    const { users } = this.props;

    return (
      users.length ?
        <div className="container">
          <ul className="list">
            {
              users.map(user => (
                <li key={user.id}>
                  <span>{user.name}</span>
                  <button type="button" onClick={() => this.props.removeUser(user.id)}>remove</button>
                </li>
              ))
            }
          </ul>
          <img src="img/wb.png" alt="img" />
        </div>
        : null
    );
  }
}

export default Users;
