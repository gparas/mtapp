import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
// @material-ui/icons
import UserIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
// custom
import headerStyle from './headerStyle';
import navbarRoutes from '../../routes/navbar';

function Header({ classes }) {
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography color="inherit" variant="title">
          MarineTraffic
        </Typography>
        <Hidden mdDown>
          <div className={classes.marginLeft}>
            {navbarRoutes.map(prop => (
              <Button color="inherit" key={prop.id}>
                <prop.icon className={classes.leftIcon} />
                {prop.label}
              </Button>
            ))}
          </div>
        </Hidden>
        <div className={classes.searchWrapper}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <Input placeholder="Vessel, Port, etc." disableUnderline className={classes.searchInput} />
        </div>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <UserIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
