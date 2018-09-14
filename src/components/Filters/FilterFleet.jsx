import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import List from '@material-ui/core/List';

import FilterTitle from './FilterTitle';

const Fleet = ({ onClick }) => (
  <List>
    <FilterTitle
      title="My Fleet"
      onClick={onClick}
    />
  </List>
);

Fleet.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Fleet;
