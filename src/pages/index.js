import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Header from '../components/Header/Header';
import ClippedDrawer from '../components/Drawer/ClippedDrawer';

const style = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

function Index({ classes }) {
  return (
    <div className={classes.root}>
      <Header />
      <ClippedDrawer />
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(style)(Index));
