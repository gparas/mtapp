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
import SearchIcon from '@material-ui/icons/Search';
// custom
import HeaderSearch from './HeaderSearch';
import HeaderSearchDrawer from './HeaderSearchDrawer';
import HeaderMenu from './HeaderMenu';
import HeaderMenuMobile from './HeaderMenuMobile';
import headerStyle from './headerStyle';

class Header extends React.Component {
  state = {
    open: false,
    openSearch: false,
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleSearchDrawerOpen = () => {
    this.setState({
      openSearch: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSearchDrawerClose = () => {
    this.setState({ openSearch: false });
  };

  render() {
    const { classes } = this.props;
    const { open, openSearch } = this.state;

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
            <Hidden xsUp>
              <HeaderSearch />
            </Hidden>
            <IconButton
              color="inherit"
              onClick={this.handleSearchDrawerOpen}
            >
              <SearchIcon />
            </IconButton>
            <Hidden mdDown>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Hidden>
            <IconButton color="inherit">
              <UserIcon />
            </IconButton>
            <Hidden lgUp>
              <IconButton
                color="inherit"
                onClick={this.handleDrawerOpen}
              >
                <Badge badgeContent={4} color="secondary">
                  <MenuIcon />
                </Badge>
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
        <Drawer
          open={openSearch}
          anchor="top"
          onClose={this.handleSearchDrawerClose}
        >
          <HeaderSearchDrawer onClose={this.handleSearchDrawerClose} />
        </Drawer>
      </AppBar>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
