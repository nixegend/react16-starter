import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

function setup() {
  const enzymeWrapper = shallow(<Home />);

  return {
    enzymeWrapper,
  };
}

describe('<Home />', () => {
  it('should render Home', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.home-container').length).toEqual(1);
    expect(enzymeWrapper.find('span').length).toEqual(1);
    expect(enzymeWrapper.find('h3').length).toEqual(1);
  });
});
