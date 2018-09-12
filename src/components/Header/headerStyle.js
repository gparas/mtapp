import { fade } from '@material-ui/core/styles/colorManipulator';

const headerStyle = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  marginLeft: {
    marginLeft: 'auto',
  },
  searchWrapper: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    marginLeft: 'auto',
    marginRight: theme.spacing.unit,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5,
    width: '100%',
    color: 'inherit',
  },
});

export default headerStyle;
