import React from 'react';
import PropTypes from 'prop-types';

import RidesTable from './RidesTable';
import Park from './Park';

const Parks = ({ parks, riders, isPlaceholderRiders, handleRemoveRider }) => (
  <RidesTable riders={riders} isPlaceholderRiders={isPlaceholderRiders} handleRemoveRider={handleRemoveRider}>
    {parks.map(({ node: park }) => (
      <Park park={park} riders={riders} isPlaceholderRiders={isPlaceholderRiders} handleRemoveRider={handleRemoveRider} />
    ))}
  </RidesTable>
);

Parks.propTypes = {
  parks: PropTypes.array.isRequired,
  riders: PropTypes.array.isRequired,
  isPlaceholderRiders: PropTypes.bool.isRequired,
  handleRemoveRider: PropTypes.func.isRequired,
};

export default Parks;
