import React from 'react';
import PropTypes from 'prop-types';

const HeightInputs = ({ handleAddRider, newRider, handleChangeNewRider, formErrors }) => (
  <div className="row pt-3">
    <div className="col-12 text-center">
      <form className="form-inline justify-content-center" onSubmit={handleAddRider}>
        <div className="form-group mb-2 mr-2 d-flex">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newRider.name}
            className="form-control"
            onChange={handleChangeNewRider}
          />
        </div>
        <div className="form-group mb-2 mr-2 d-block">
          <input
            type="number"
            name="height"
            placeholder="Height"
            value={newRider.height}
            className="form-control"
            onChange={handleChangeNewRider}
          />
        </div>
        <button type="submit" className="btn btn-outline-success mb-2">
          Add Rider
        </button>
      </form>
    </div>
  </div>
);

HeightInputs.propTypes = {
  handleAddRider: PropTypes.func.isRequired,
  newRider: PropTypes.object.isRequired,
  handleChangeNewRider: PropTypes.func.isRequired,
  formErrors: PropTypes.object.isRequired,
};

export default HeightInputs;
