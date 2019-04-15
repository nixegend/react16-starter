import React from 'react';
import renderer from 'react-test-renderer';
import Users from './Users';

const props = {
  removeUser: () => undefined,
  loadUsersList: () => undefined,
  users: [
    { name: 'Bob3', id: 'sfdsdfsdf' },
    { name: 'Bob2', id: 'dfgwerwrd' },
    { name: 'Bob1', id: 's234sfsdg' }
  ]
};

describe('<Users />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Users {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
