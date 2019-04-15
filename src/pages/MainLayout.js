import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import internalUrls from '../common/constants/internal-urls';

import HomeContainer from './home/HomeContainer';
import ModalEntityContainer from './modal-entity/ModalEntityContainer';
import SideNotificationsContainer from '../modules/side-notifications/SideNotificationsContainer';

import NotFound from './not-found/NotFound';
import TestContainer from './test-page/TestContainer';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.previousLocation = props.location;

    if (props.location.search.indexOf('loggedIn=true') !== -1) {
      props.history.replace(props.location.pathname);
    }

    if (this.isEntityModalPage(props.location)) {
      this.previousLocation = {
        ...props.location,
        pathname: `/${props.location.pathname.split('/')[2]}`
      };
    }
  }

  componentWillUpdate(nextProps) {
    if (this.isEntityModalPage(nextProps.location)) {
      this.previousLocation = this.props.location;
    }
  }

  isEntityModalPage(location) {
    return (
      location.pathname &&
      location.pathname.indexOf(internalUrls.ENTITY.path) !== -1
    );
  }

  render() {
    const { location } = this.props;
    const isModal =
      this.isEntityModalPage(location) && this.previousLocation !== location;

    return [
      <SideNotificationsContainer key="side-notifications-container" />,
      <TransitionGroup key="main-layout" className="main-layout">
        <CSSTransition
          timeout={300}
          classNames="base-page-animation"
          key={isModal ? this.previousLocation.key : location.key}
          location={isModal ? this.previousLocation : location}
        >
          <Switch location={location}>
            {/* <Redirect exact from="/" to={internalUrls.HOME.path} /> */}
            <Route
              exact
              path={internalUrls.HOME.path}
              component={HomeContainer}
            />

            <Route path={internalUrls.TEST.path} component={TestContainer} />

            <Route path="*" component={NotFound} />
          </Switch>
        </CSSTransition>

        {isModal && (
          <Route
            path={`${internalUrls.ENTITY.path}/:id?`}
            component={ModalEntityContainer}
          />
        )}
      </TransitionGroup>
    ];
  }
}

export default withRouter(MainLayout);
