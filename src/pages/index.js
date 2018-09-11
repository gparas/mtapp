import React from 'react';
import withRoot from '../withRoot';
import Header from "../components/Header/Header.js";

class Index extends React.Component {

  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default withRoot(Index);

