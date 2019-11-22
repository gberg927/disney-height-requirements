import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const RideTableHeaderRow = ({ riders, isPlaceholderRiders, handleRemoveRider }) => (
  <thead>
    <th className="w-40">Ride</th>
    {riders.map((rider, idx) => (
      <th>
        <p className={`d-inline p-2${isPlaceholderRiders ? ' text-muted font-italic font-weight-lighter' : ''}`}>
          {`${rider.name} (${rider.height}")`}
        </p>
        {!isPlaceholderRiders && (
          <>
            <i
              className="fa fa-trash"
              onClick={handleRemoveRider(idx)}
              onKeyPress={handleRemoveRider(idx)}
              role="button"
              tabIndex="0"
              aria-label="Delete User"
              data-tip="Delete User"
              data-for="deleteUser"
            />
            <ReactTooltip id="deleteUser" />
          </>
        )}
      </th>
    ))}
  </thead>
);

RideTableHeaderRow.propTypes = {
  riders: PropTypes.array.isRequired,
  isPlaceholderRiders: PropTypes.bool.isRequired,
  handleRemoveRider: PropTypes.func.isRequired,
};

export default RideTableHeaderRow;
