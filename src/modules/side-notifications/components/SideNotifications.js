import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NotificationItem from './NotificationItem';

import { noop } from '../../../common/utils/base-helper';

import '../styles/side-notifications.scss';

const SideNotifications = ({ notifications, closeSideNotificationById }) => (
  <TransitionGroup className="side-notifications scroll-thin">
    {notifications.map(notification => (
      <CSSTransition
        timeout={300}
        key={notification.id}
        classNames="side-notification-animation"
      >
        <NotificationItem
          id={notification.id}
          closeSideNotificationById={closeSideNotificationById}
          message={notification.message}
          type={notification.type}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

NotificationItem.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object),
  closeSideNotificationById: PropTypes.func
};

NotificationItem.defaultProps = {
  notifications: [],
  closeSideNotificationById: noop
};

export default SideNotifications;
