import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// custom
import HeaderSubMenu from './HeaderSubMenu';
import headerStyle from './headerStyle';
import appBarRoutes from '../../routes/appBar';

function HeaderMenu({ classes }) {
  return (
    <div className={classes.mainMenu}>
      {appBarRoutes.map((menuItem) => {
        if (menuItem.children !== undefined) {
          return (
            <HeaderSubMenu
              key={menuItem.id}
              name={menuItem.name}
              icon={menuItem.icon}
              menuItem={menuItem.children}
            />
          );
        }
        return (
          <Button color="inherit" key={menuItem.id}>
            {menuItem.icon}
            {menuItem.name}
          </Button>
        );
      })}
    </div>
  );
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(HeaderMenu);
