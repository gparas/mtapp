import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
// @material-ui/icons
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// custom
import headerStyle from './headerStyle';

class HeaderSubMenu extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (event) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { name, icon, menuItem } = this.props;
    return (
      <div>
        <Button
          color="inherit"
          buttonRef={(node) => {
            this.anchorEl = node;
          }}
          aria-owns={open ? name : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          {icon}
          {name}
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id={name}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    {menuItem.map(subMenu => (
                      <MenuItem key={subMenu.id} onClick={this.handleClose}>
                        {subMenu.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

HeaderSubMenu.propTypes = {
  name: PropTypes.string.isRequired,
  menuItem: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(HeaderSubMenu);
