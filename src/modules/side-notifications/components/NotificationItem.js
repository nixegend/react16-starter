/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/utils/base-helper';
import { apiNotificationsTypes } from '../../../common/constants/common';

import '../styles/notification-item.scss';

class NotificationItem extends React.Component {
  componentDidMount() {
    if (this.props.type === apiNotificationsTypes.INFO) {
      setTimeout(this.onCloseNotification, 6000);
    }
  }

  onCloseNotification = () => {
    this.props.closeSideNotificationById(this.props.id);
  };

  render() {
    return (
      <div
        className={`notification-item ${this.props.type}`}
        onClick={this.onCloseNotification}
      >
        <i
          className={`status-icon icon-${this.props.type}-o`}
          aria-hidden="true"
        />
        <i className="icon-close" aria-hidden="true" />
        <div className="notification-content">{this.props.message}</div>
      </div>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.string.isRequired,
  closeSideNotificationById: PropTypes.func,
  message: PropTypes.string,
  type: PropTypes.string
};

NotificationItem.defaultProps = {
  closeSideNotificationById: noop,
  type: 'info',
  message: ''
};

export default NotificationItem;
