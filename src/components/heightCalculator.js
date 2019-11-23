import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SEO from './seo';
import HeightInputs from './heightInputs';
import Parks from './Parks';

const HeightCalculator = ({ parks }) => {
  const placeholderRiders = [
    { name: 'Rider 1', height: 70 },
    { name: 'Rider 2', height: 64 },
    { name: 'Rider 3', height: 48 },
    { name: 'Rider 4', height: 43 },
    { name: 'Rider 5', height: 37 },
  ];

  const [newRider, setNewRider] = useState({ name: '', height: '' });
  const [riders, setRiders] = useState(/* JSON.parse(localStorage.getItem('riders')) ||  */ []);
  const [formErrors, setFormErrors] = useState({ name: '', height: '' });

  const handleAddRider = e => {
    e.preventDefault();

    if (newRider.name === '') {
      setFormErrors({
        name: 'Name cannot be blank',
      });
    }

    setRiders([...riders, newRider]);
    setNewRider({ name: '', height: '' });
  };

  const handleRemoveRider = idx => () => {
    setRiders(riders.filter((s, sidx) => idx !== sidx));
  };

  const handleChangeNewRider = e => {
    setNewRider({
      ...newRider,
      [e.target.name]: e.target.value,
    });
  };

  /* useEffect(() => {
    localStorage.setItem('riders', JSON.stringify(riders));
  }, [riders]); */

  return (
    <div id="calculator" className="container calculator">
      <SEO title="Home" />
      <HeightInputs
        handleAddRider={handleAddRider}
        newRider={newRider}
        handleChangeNewRider={handleChangeNewRider}
        formErrors={formErrors}
      />
      <Parks
        parks={parks}
        riders={riders.length > 0 ? riders : placeholderRiders}
        isPlaceholderRiders={!(riders.length > 0)}
        handleRemoveRider={handleRemoveRider}
      />
    </div>
  );
};

HeightCalculator.propTypes = {
  parks: PropTypes.array.isRequired,
};

export default HeightCalculator;
