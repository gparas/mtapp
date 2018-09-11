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
import MapIcon from '@material-ui/icons/Public';
import CommunityIcon from '@material-ui/icons/Repeat';
import SolutionsIcon from '@material-ui/icons/Highlight';
import UserIcon from '@material-ui/icons/Person';
import PortsIcon from '@material-ui/icons/DeviceHub';
import BoatIcon from '@material-ui/icons/DirectionsBoat';
import SearchIcon from '@material-ui/icons/Search';
import CompanyIcon from '@material-ui/icons/Business';
import NotificationsIcon from '@material-ui/icons/Notifications';
// custom
import HeaderLinks from './HeaderLinks';
import headerStyle from './headerStyle';

const vesselsMenuItem = [
  'All Vessels',
  'My Fleets',
  'Vessels near me',
  'Vessel Photos'
]
const portsMenuItem = [
  'Search Ports',
  'Arrivals & Departures',
  'Expected Arrivals',
  'Ports near me',
  'Port Photos'
]
const communityMenuItem = [
  'Cover your Area',
  'Receiving Stations',
  'Photographers',
  'Photo Upload',
  'Voyage Planner',
  'Research',
  'Report your own position'
]
const solutionsMenuItem = [
  'Online Services',
  'Business Directory',
  'Mobile Apps',
  'Embed Map',
  'Data Archives',
  'Data Services (API)'
]

function Header ({ classes }) {
  return(
    <AppBar>
      <Toolbar variant="dense">
        <Typography color="inherit" variant="title">
          MarineTraffic
        </Typography>
        <Hidden mdDown>
          <Button className={classes.marginLeft} color="inherit">
            <MapIcon className={classes.leftIcon}/>
            Live Map
          </Button>
          <HeaderLinks label="Vessels" menuItems={vesselsMenuItem}>
            <BoatIcon className={classes.leftIcon}/>
          </HeaderLinks>
          <HeaderLinks label="Ports" menuItems={portsMenuItem}>
            <PortsIcon className={classes.leftIcon}/>
          </HeaderLinks>
          <Button color="inherit">
            <CompanyIcon className={classes.leftIcon}/>
            Companies
          </Button>
          <HeaderLinks label="Community" menuItems={communityMenuItem}>
            <CommunityIcon className={classes.leftIcon}/>
          </HeaderLinks>
          <HeaderLinks label="Solutions" menuItems={solutionsMenuItem}>
            <SolutionsIcon className={classes.leftIcon}/>
          </HeaderLinks>
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