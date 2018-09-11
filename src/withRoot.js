import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b3d7c',
    },
    secondary: {
      main: '#03adef',
      contrastText: '#fff'
    },
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiToolbar: {
      dense: {
        minHeight: 56,
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
        textTransform: 'capitalize',
      },
    },
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
