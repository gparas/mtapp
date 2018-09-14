import { fade } from '@material-ui/core/styles/colorManipulator';

const headerStyle = theme => ({
  appBar: {
    zIndex: theme.zIndex.modal,
  },
  mainMenu: {
    display: 'flex',
    marginLeft: 'auto',
  },
  rightMenu: {
    display: 'flex',
    marginLeft: 'auto',
  },
  searchWrapper: {
    position: 'relative',
    alignSelf: 'center',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
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
