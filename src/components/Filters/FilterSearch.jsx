import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';

import FilterTitle from './FilterTitle';

const Search = ({ onClick }) => (
  <List>
    <FilterTitle
      title="Search Map"
      onClick={onClick}
    />
    <ListItem>
      <TextField
        id="findVesselPort"
        name="findVesselPort"
        label="Find a Vessel or Port"
        fullWidth
      />
    </ListItem>
    <ListItem>
      <TextField
        id="findLocation"
        name="findLocation"
        label="Find a Map Location"
        fullWidth
      />
    </ListItem>
  </List>
);

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;
