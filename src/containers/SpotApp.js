import Header from './Header';
import React from 'react';
import GraphicArtist from './panel/GraphicArtist'

class SpotApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: undefined,
    };
  }

  render() {
    return (
      // <Header />
      <GraphicArtist />
    )
  }

}

export default SpotApp;
