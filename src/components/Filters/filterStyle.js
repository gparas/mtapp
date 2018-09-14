const filterStyle = theme => ({
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
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: theme.mixins.toolbar,
  filterWrapper: {
    display: 'flex',
  },
});

export default filterStyle;
