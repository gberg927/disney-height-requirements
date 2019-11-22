import React from 'react';
import PropTypes from 'prop-types';

import Includes from './includes';
import Header from './header';
import Footer from './footer';

import './layout.css';

const Layout = ({ siteTitle, parks, children }) => (
  <>
    <Includes />
    <Header siteTitle={siteTitle} parks={parks} />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  parks: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
