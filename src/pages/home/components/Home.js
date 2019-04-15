import React from 'react';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '@utils/base-helper';

import '../styles/home-page.scss';

class Home extends React.Component {
  constructor() {
    super();

    this.title = 'Home';
  }

  render() {
    const { location, history } = this.props;
    console.log(location);
    console.log(history);

    return (
      <DocumentTitle title={getPageTitle(this.title)}>
        <div className="home-page-container scroll-thin">
          <h1>Home page!@@@!</h1>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
