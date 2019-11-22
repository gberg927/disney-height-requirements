import React from 'react';
import PropTypes from 'prop-types';

import RidesTableHeaderRow from './RidesTableHeaderRow';
import RidesTableRow from './RidesTableRow';

const RidesTable = ({ rides, riders, isPlaceholderRiders, handleRemoveRider }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="table-responsive">
        <table className="table table-sm table-striped table-hover ">
          <RidesTableHeaderRow riders={riders} isPlaceholderRiders={isPlaceholderRiders} handleRemoveRider={handleRemoveRider} />
          <tbody>
            {rides
              .filter(ride => ride.type === 'Attraction')
              .map(ride => (
                <RidesTableRow ride={ride} riders={riders} isPlaceholderRiders={isPlaceholderRiders} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

RidesTable.propTypes = {
  rides: PropTypes.object.isRequired,
  riders: PropTypes.array.isRequired,
  isPlaceholderRiders: PropTypes.bool.isRequired,
  handleRemoveRider: PropTypes.func.isRequired,
};

export default RidesTable;
