
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

describe('<NavigationMenu />', () => {
  it('Shoud render correctly NavigationMenu component', () => {
    const tree = renderer.create(<Router><NavigationMenu /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
