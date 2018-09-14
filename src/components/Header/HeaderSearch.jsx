import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// @material-ui/icons
import SearchIcon from '@material-ui/icons/Search';
// custom
import headerStyle from './headerStyle';

function HeaderSearch({ classes }) {
  return (
    <div className={classes.searchWrapper}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <Input placeholder="Vessel, Port, etc." disableUnderline className={classes.searchInput} />
    </div>
  );
}

HeaderSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(HeaderSearch);
