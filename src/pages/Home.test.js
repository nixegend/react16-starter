import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Home from './Home';

function setup() {
  const enzymeWrapper = shallow(<Home />);

  return {
    enzymeWrapper,
  };
}

describe('<Home />', () => {
  test('should render Home', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.home-container').length).toBe(1);
    expect(enzymeWrapper.find('span').length).toBe(1);
    expect(enzymeWrapper.find('h3').length).toBe(1);
  });
});
