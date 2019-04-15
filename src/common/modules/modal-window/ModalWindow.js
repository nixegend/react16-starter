/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import { noop, stopPropagation } from '../../utils/base-helper';

import './modal-window.scss';

const ModalWindow = ({
  className,
  children,
  maxWidth,
  isFullHeight,
  isVisibleHeader,
  animationClassName,
  isScrollableContent,
  onExitedAnimation,
  onOverlayClick,
  onClose,
  timeout,
  isOpen,
  title
}) => (
  <CSSTransition
    mountOnEnter
    unmountOnExit
    timeout={timeout}
    in={isOpen}
    onExited={onExitedAnimation}
    classNames={animationClassName}
  >
    <div
      className={classNames('modal-window', className, {
        'scrollable-content': isScrollableContent,
        'full-height': isFullHeight
      })}
      onClick={onOverlayClick}
    >
      <div
        className="modal-window-container"
        style={{ maxWidth: `${maxWidth}px` }}
        onClick={stopPropagation}
      >
        {isVisibleHeader && (
          <div className="modal-window-header">
            <div className="title-container">
              <span className="title">{title}</span>
            </div>
            <button
              type="button"
              className="close-modal-window-btn"
              onClick={onClose}
            >
              <span className="cross-sign-icon" aria-hidden="true" />
            </button>
          </div>
        )}
        <div className="modal-window-content">{children}</div>
      </div>
    </div>
  </CSSTransition>
);

ModalWindow.propTypes = {
  onClose: PropTypes.func,
  onOverlayClick: PropTypes.func,
  onExitedAnimation: PropTypes.func,
  isScrollableContent: PropTypes.bool,
  isOpen: PropTypes.bool,
  isFullHeight: PropTypes.bool,
  isVisibleHeader: PropTypes.bool,
  maxWidth: PropTypes.number,
  className: PropTypes.string,
  animationClassName: PropTypes.string,
  timeout: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.any
};

ModalWindow.defaultProps = {
  title: '',
  className: '',
  timeout: 170,
  maxWidth: 1000,
  isOpen: false,
  animationClassName: 'modal-window-animation',
  isScrollableContent: false,
  isVisibleHeader: true,
  isFullHeight: false,
  children: null,
  onExitedAnimation: noop,
  onOverlayClick: noop,
  onClose: noop
};

export default ModalWindow;
