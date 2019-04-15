import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import ModalWindow from './ModalWindow';
import { getPageTitle } from '../../utils/base-helper';

class ModalPageFrame extends React.Component {
  state = { isOpen: false };

  getChildContext() {
    return { onCloseModalWindow: this.onClose };
  }

  componentDidMount() {
    this.setState({ isOpen: true });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  };

  onExitedAnimation = () => {
    if (typeof this.props.onBackBtnClick === 'function') {
      this.props.onBackBtnClick();
    } else if (this.props.backPath) {
      this.props.history.push(this.props.backPath);
    } else if (this.props.history.length > 2) {
      this.props.history.goBack();
    } else {
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <DocumentTitle title={getPageTitle(this.props.pageTitle)}>
        <ModalWindow
          title={this.props.pageTitle}
          onClose={this.onClose}
          onOverlayClick={this.onClose}
          isOpen={this.state.isOpen}
          onExitedAnimation={this.onExitedAnimation}
        >
          {this.props.children}
        </ModalWindow>
      </DocumentTitle>
    );
  }
}

ModalPageFrame.childContextTypes = {
  onCloseModalWindow: PropTypes.func
};

export default ModalPageFrame;
