import React from 'react';
import PropTypes from 'prop-types';

import RidesTableHeaderRow from './RidesTableHeaderRow';

const RidesTable = ({ children, riders, isPlaceholderRiders, handleRemoveRider }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="table-responsive">
        <table className="table table-sm table-striped table-hover ">
          <RidesTableHeaderRow riders={riders} isPlaceholderRiders={isPlaceholderRiders} handleRemoveRider={handleRemoveRider} />
          {children}
        </table>
      </div>
    </div>
  </div>
);

RidesTable.propTypes = {
  children: PropTypes.array.isRequired,
  riders: PropTypes.array.isRequired,
  isPlaceholderRiders: PropTypes.bool.isRequired,
  handleRemoveRider: PropTypes.func.isRequired,
};

export default RidesTable;
