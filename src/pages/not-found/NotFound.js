import React from 'react';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '../../common/utils/base-helper';

import './not-found.scss';

class NotFound extends React.Component {
  constructor() {
    super();

    this.title = 'Page not found';
  }

  render() {
    const { location, history } = this.props;
    console.log(location);
    console.log(history);

    return (
      <DocumentTitle title={getPageTitle(this.title)}>
        <div className="page-not-found-container">
          <h1 className="error-number">404</h1>
          <h3 className="title">Ooops... Something went wrong.</h3>
          <p className="sub-title">
            Looks like the page you are trying to access does not exist.
          </p>
        </div>
      </DocumentTitle>
    );
  }
}

export default NotFound;
