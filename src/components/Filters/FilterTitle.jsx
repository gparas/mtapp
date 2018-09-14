import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import CloseIcon from '@material-ui/icons/Close';

const style = theme => ({
  root: {
    justifyContent: 'space-between',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: theme.spacing.unit,
  },
});

const FilterTitle = ({ onClick, title, classes }) => (
  <ListItem className={classes.root}>
    <Typography variant="title">{title}</Typography>
    <IconButton onClick={onClick} size="small" aria-label="close">
      <CloseIcon />
    </IconButton>
  </ListItem>
);

FilterTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(FilterTitle);
