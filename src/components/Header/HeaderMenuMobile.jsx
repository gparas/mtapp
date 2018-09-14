import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';
// custom
import HeaderSearch from './HeaderSearch';
import HeaderSubMenuMobile from './HeaderSubMenuMobile';
import appBarRoutes from '../../routes/appBar';

const style = theme => ({
  root: {
    width: 320,
    backgroundColor: theme.palette.background.paper,
  },
});

function HeaderMenuMobile({ classes }) {
  return (
    <div className={classes.root}>
      <Hidden smUp>
        <List component="div" disablePadding>
          <ListItem>
            <HeaderSearch />
          </ListItem>
        </List>
        <Divider />
      </Hidden>
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
              <ListItemText inset primary={menuItem.name} />
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
