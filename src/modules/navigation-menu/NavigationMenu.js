import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import internalUrls from '@constants/internal-urls';

const NavigationMenu = ({ className }) => (
  <nav className={className}>
    <Link to={internalUrls.HOME.path} className="logo">
      <img alt="logo" src="/images/sigma-logo.svg" />
    </Link>
    <NavLink to={internalUrls.HOME.path} exact>
      Home
    </NavLink>
    <NavLink to={internalUrls.ENTITY.path}>Entity</NavLink>
    <NavLink to={internalUrls.TEST.path}>Test</NavLink>
  </nav>
);

NavigationMenu.propTypes = {
  className: PropTypes.string
};

NavigationMenu.defaultProps = {
  className: ''
};

export default NavigationMenu;
