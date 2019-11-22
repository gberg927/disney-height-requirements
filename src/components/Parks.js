import React from 'react';
import PropTypes from 'prop-types';

import Park from './Park';

const Parks = ({ parks, riders, isPlaceholderRiders, handleRemoveRider }) =>
  parks.map(({ node: park }) => (
    <Park park={park} riders={riders} isPlaceholderRiders={isPlaceholderRiders} handleRemoveRider={handleRemoveRider} />
  ));

Parks.propTypes = {
  parks: PropTypes.array.isRequired,
  riders: PropTypes.array.isRequired,
  isPlaceholderRiders: PropTypes.bool.isRequired,
  handleRemoveRider: PropTypes.func.isRequired,
};

export default Parks;
