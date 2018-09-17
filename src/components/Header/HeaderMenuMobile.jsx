import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// @material-ui/icons
import NotificationsIcon from '@material-ui/icons/Notifications';
// custom
import HeaderSubMenuMobile from './HeaderSubMenuMobile';
import appBarRoutes from '../../routes/appBar';

const style = theme => ({
  root: {
    width: 320,
    backgroundColor: theme.palette.background.paper,
  },
  textRight: {
    textAlign: 'right',
  },
});

function HeaderMenuMobile({ classes }) {
  return (
    <div className={classes.root}>
      <List component="div">
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
          <ListItemText secondary={4} className={classes.textRight} />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        {appBarRoutes.map((menuItem) => {
          if (menuItem.children !== undefined) {
            return (
              <HeaderSubMenuMobile
                key={menuItem.id}
                name={menuItem.name}
                icon={menuItem.icon}
                menuItem={menuItem.children}
              />
            );
          }
          return (
            <ListItem button key={menuItem.id}>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.name} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

HeaderMenuMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(HeaderMenuMobile);
