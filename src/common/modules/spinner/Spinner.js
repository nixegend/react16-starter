import React from 'react';
import PropTypes from 'prop-types';

import './spinner.scss';

const Spinner = ({ borderSize, size }) => (
  <i
    className="spinner"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${borderSize}px`
    }}
  />
);

Spinner.propTypes = {
  borderSize: PropTypes.number,
  size: PropTypes.number
};

Spinner.defaultProps = {
  borderSize: 3,
  size: 25
};

export default Spinner;
