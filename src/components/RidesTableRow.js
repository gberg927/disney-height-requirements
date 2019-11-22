import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const RideTableRow = ({ ride, riders, isPlaceholderRiders }) => (
  <tr className={riders.filter(rider => ride.height_restriction > rider.height).length > 0 ? 'table-warning' : ''}>
    <td key={ride.slug.current}>
      <p className="d-inline p-2">
        {ride.title}
        {ride.height_restriction !== 0 && ` (${ride.height_restriction}")`}
      </p>
      {ride.single_rider && <i className="fa fa-user p-2" data-tip="Single Rider Line" data-for="singleRider" />}
      {ride.rider_swap && <i className="fa fa-exchange p-2" data-tip="Rider Swap" data-for="riderSwap" />}
      <ReactTooltip id="singleRider" />
      <ReactTooltip id="riderSwap" />
    </td>
    {riders.map(rider => (
      <td>
        {rider.name && rider.height && ride.height_restriction <= rider.height && (
          <i className={`fa fa-check p-2${isPlaceholderRiders ? ' text-muted font-italic font-weight-lighter' : ''}`} />
        )}
        {rider.name && rider.height && ride.height_restriction > rider.height && (
          <i className={`fa fa-times p-2${isPlaceholderRiders ? ' text-muted font-italic font-weight-lighter' : ''}`} />
        )}
      </td>
    ))}
  </tr>
);

RideTableRow.propTypes = {
  ride: PropTypes.object.isRequired,
  riders: PropTypes.array.isRequired,
  isPlaceholderRiders: PropTypes.bool.isRequired,
};

export default RideTableRow;
