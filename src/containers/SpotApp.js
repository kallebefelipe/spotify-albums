import Header from './Header';
import React from 'react';

class SpotApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: undefined,
    };
  }

  render() {
    return (
      <Header />
    )
  }

}

export default SpotApp;
