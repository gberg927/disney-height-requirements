import React from 'react';
import PropTypes from 'prop-types';

import RidesTableRow from './RidesTableRow';

const Park = ({ park, riders, isPlaceholderRiders }) => (
  <>
    <thead className="table-primary">
      <th className="text-uppercase font-weight-bold py-3 px-2" colSpan={riders.length + 1}>
        <h4>{park.title}</h4>
      </th>
    </thead>
    <tbody>
      {park.rides
        .filter(ride => ride.type === 'Attraction')
        .map(ride => (
          <RidesTableRow ride={ride} riders={riders} isPlaceholderRiders={isPlaceholderRiders} />
        ))}
    </tbody>
  </>
);

Park.propTypes = {
  park: PropTypes.object.isRequired,
  riders: PropTypes.array.isRequired,
  isPlaceholderRiders: PropTypes.isRequired,
};

export default Park;
