import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import List from '@material-ui/core/List';

import FilterTitle from './FilterTitle';

const Layers = ({ onClick }) => (
  <List>
    <FilterTitle
      title="Layers"
      onClick={onClick}
    />
  </List>
);

Layers.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Layers;
