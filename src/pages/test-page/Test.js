import React from 'react';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '../../common/utils/base-helper';

import './test.scss';

class Test extends React.Component {
  constructor() {
    super();

    this.title = 'Test';
  }

  render() {
    const { location, history } = this.props;
    console.log(location);
    console.log(history);

    return (
      <DocumentTitle title={getPageTitle(this.title)}>
        <div className="test-container scroll-thin">
          <h1>Home page</h1>
        </div>
      </DocumentTitle>
    );
  }
}

export default Test;
