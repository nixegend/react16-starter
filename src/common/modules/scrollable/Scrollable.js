import React from 'react';
import PropTypes from 'prop-types';

import { noop } from '../../utils/base-helper';

class Scrollable extends React.Component {
  componentDidMount() {
    if (this.srollableElement) {
      this.srollableElement.addEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    if (this.srollableElement) {
      this.srollableElement.removeEventListener('scroll', this.onScroll);
    }
  }

  onScroll = event => {
    if (!this.props.isProcessing) {
      if ((event.target.scrollHeight - (event.target.clientHeight + event.target.scrollTop)) === 0) {
        this.props.onScrolledToBottom();
      }
    }
  };

  setSrollableElement = c => {
    this.srollableElement = c;
  };

  render() {
    return React.createElement(
      this.props.tag,
      { className: this.props.className, ref: this.setSrollableElement },
      this.props.children
    );
  }
}

Scrollable.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  isProcessing: PropTypes.bool,
  onScrolledToBottom: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

Scrollable.defaultProps = {
  tag: 'div',
  children: null,
  isProcessing: false,
  className: 'scroll-thin',
  onScrolledToBottom: noop
};

export default Scrollable;
