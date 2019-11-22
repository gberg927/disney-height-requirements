import React from 'react';
import PropTypes from 'prop-types';

import RidesTable from './RidesTable';

const Park = ({ park, riders, isPlaceholderRiders, handleRemoveRider }) => (
  <div id={`${park.slug.current}`}>
    <div className="row pb-3">
      <div className="col-12 text-center">
        <h4>{park.title}</h4>
      </div>
    </div>
    <RidesTable rides={park.rides} riders={riders} isPlaceholderRiders={isPlaceholderRiders} handleRemoveRider={handleRemoveRider} />
  </div>
);

Park.propTypes = {
  park: PropTypes.object.isRequired,
  riders: PropTypes.array.isRequired,
  isPlaceholderRiders: PropTypes.isRequired,
  handleRemoveRider: PropTypes.func.isRequired,
};

export default Park;
