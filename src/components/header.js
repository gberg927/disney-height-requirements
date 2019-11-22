import PropTypes from 'prop-types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = ({ siteTitle, parks }) => (
  <nav className="container calculator-nav fixed-top">
    <header className="calculator-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-12 text-center">
          <AnchorLink className="calculator-header-logo text-dark" offset="125" href="#calculator">
            {siteTitle}
          </AnchorLink>
        </div>
      </div>
    </header>
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        {parks.map(({ node: park }) => (
          <AnchorLink className="p-2 text-muted" offset="125" href={`#${park.slug.current}`}>
            {park.title}
          </AnchorLink>
        ))}
      </nav>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  parks: PropTypes.array.isRequired,
};
export default Header;
