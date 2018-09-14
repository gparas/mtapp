import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
// @material-ui/icons
import UserIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
// custom
import HeaderSearch from './HeaderSearch';
import HeaderMenu from './HeaderMenu';
import HeaderMenuMobile from './HeaderMenuMobile';
import headerStyle from './headerStyle';

class Header extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography color="inherit" variant="title">
            MarineTraffic
          </Typography>
          <Hidden mdDown>
            <HeaderMenu />
          </Hidden>
          <div className={classes.rightMenu}>
            <Hidden xsDown>
              <HeaderSearch />
            </Hidden>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <UserIcon />
            </IconButton>
            <Hidden lgUp>
              <IconButton
                color="inherit"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
        <Drawer
          open={open}
          anchor="right"
          onClose={this.handleDrawerClose}
        >
          <HeaderMenuMobile />
        </Drawer>
      </AppBar>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
