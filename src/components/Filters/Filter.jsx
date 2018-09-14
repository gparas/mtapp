import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
// @material-ui/icons
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '@material-ui/icons/FilterList';
import BoatIcon from '@material-ui/icons/DirectionsBoat';
import LayersIcon from '@material-ui/icons/Layers';
import WeatherIcon from '@material-ui/icons/Waves';

import FilterAction from './FilterAction';
import SpeedDials from './SpeedDials';

import Search from './FilterSearch';
import Vessel from './FilterVessel';
import Fleet from './FilterFleet';
import Layers from './FilterLayers';
import Weather from './FilterWeather';

import filterStyle from './filterStyle';

const actions = [
  { icon: <SearchIcon />, name: 'Search' },
  { icon: <FilterIcon />, name: 'Vessel' },
  { icon: <BoatIcon />, name: 'Fleet' },
  { icon: <LayersIcon />, name: 'Layers' },
  { icon: <WeatherIcon />, name: 'Weather' },
];


class Filter extends React.Component {
  state = {
    open: false,
    activeFilter: 0,
  };

  handleDrawerOpen = (i) => {
    this.setState({
      open: true,
      activeFilter: i,
    });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  getFilterContent = () => {
    const { activeFilter } = this.state;
    switch (activeFilter) {
      case 0:
        return <Search onClick={this.handleDrawerClose} />;
      case 1:
        return <Vessel onClick={this.handleDrawerClose} />;
      case 2:
        return <Fleet onClick={this.handleDrawerClose} />;
      case 3:
        return <Layers onClick={this.handleDrawerClose} />;
      case 4:
        return <Weather onClick={this.handleDrawerClose} />;
      default:
        throw new Error('Unknown step');
    }
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.filterWrapper}>
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaperAction,
            }}
          >
            <div className={classes.toolbar} />
            <List component="div">
              {actions.map((action, i) => (
                <FilterAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => this.handleDrawerOpen(i)}
                />
              ))}
            </List>
          </Drawer>
        </Hidden>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbar} />
          {this.getFilterContent()}
        </Drawer>
        <Hidden smUp>
          <SpeedDials actions={actions} />
        </Hidden>
      </div>
    );
  }
}


Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(filterStyle)(Filter);
