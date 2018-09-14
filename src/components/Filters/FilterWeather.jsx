import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import List from '@material-ui/core/List';

import FilterTitle from './FilterTitle';

const Weather = ({ onClick }) => (
  <List>
    <FilterTitle
      title="Weather Maps"
      onClick={onClick}
    />
  </List>
);

Weather.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Weather;
