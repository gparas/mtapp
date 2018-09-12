import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ExpandIcon from '@material-ui/icons/ExpandMore';

class DropdownLinks extends React.Component{
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;
    const { label, menuItems, icon } = this.props;
    const menuId = label.split(" ").join("-").toLowerCase();
    return(
      <div>
        <Button
          color="inherit"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-owns={open ? menuId : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          {icon}
          {label}
          <ExpandIcon/>
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id={menuId}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    {menuItems.map((label, index) =>
                      <MenuItem key={index} onClick={this.handleClose}>{label}</MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
};

DropdownLinks.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  menuItems: PropTypes.array,
};

export default DropdownLinks;
