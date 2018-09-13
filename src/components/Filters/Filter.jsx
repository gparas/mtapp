import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// @material-ui/icons
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

import FilterAction from './FilterAction';
import SpeedDials from './SpeedDials';


const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 320,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
  },
  drawerPaperAction: {
    position: 'relative',
    border: 0,
    width: theme.spacing.unit * 9,
  },
  toolbar: theme.mixins.toolbar,
  filterWrapper: {
    display: 'flex',
  }
});

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy'},
  { icon: <SaveIcon />, name: 'Save'},
  { icon: <PrintIcon />, name: 'Print'},
  { icon: <ShareIcon />, name: 'Share'},
  { icon: <DeleteIcon />, name: 'Delete'},
];

class Filter extends React.Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return(
      <div className={classes.filterWrapper}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaperAction
          }}
        >
          <div className={classes.toolbar} />
          <List>
            {actions.map(action => (
              <FilterAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={this.handleDrawerOpen}
              />
            ))}
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbar} />
          <button onClick={this.handleDrawerClose}>close</button>
        </Drawer>
        <SpeedDials />
      </div>
    );
  }
}


Filter.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Filter);
