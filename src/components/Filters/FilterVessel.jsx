import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import List from '@material-ui/core/List';

import FilterTitle from './FilterTitle';

const Vessel = ({ onClick }) => (
  <List>
    <FilterTitle
      title="Vessel Filters"
      onClick={onClick}
    />
  </List>
);

Vessel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Vessel;
