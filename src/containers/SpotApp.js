import React from 'react';
import ChartAlbums from './panel/ChartAlbums';
import { connect } from 'react-redux';

class SpotApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: undefined,
    };
  }

  render() {
    return (
      <ChartAlbums />
    )
  }
}

export default SpotApp;
