import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Header from '../components/Header/Header';
import Filter from '../components/Filters/Filter';

const style = () => ({
  root: {
    flexGrow: 1,
    height: '100vh',
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
      <Filter />
    </div>
  );
}

Index.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withRoot(withStyles(style)(Index));
