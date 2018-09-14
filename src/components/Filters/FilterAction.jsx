import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function FilterAction({ tooltipTitle, icon, onClick }) {
  return (
    <Tooltip title={tooltipTitle} placement="right">
      <ListItem
        button
        onClick={onClick}
      >
        <ListItemIcon style={{ color: 'white' }}>
          {icon}
        </ListItemIcon>
      </ListItem>
    </Tooltip>
  );
}

FilterAction.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltipTitle: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterAction;
