import React from 'react';
import { Link } from 'react-router-dom';
import internalUrls from '../common/constants/internalUrls';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <ul>
      <li><Link to={`${internalUrls.HOME}`}>Home</Link></li>
      <li><Link to={`/${internalUrls.USERS}`}>Users</Link></li>
    </ul>
    {children}
  </div>
);

export default MainLayout;
