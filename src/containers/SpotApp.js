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

  componentDidMount() {
    this.props.fetchAuth();
  }

  render() {
    return (
      <ChartAlbums />
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchAuth: () => {
      dispatch({type: "LOGIN_CLIENT_REQUEST"})
    }
  }
}

export default connect(null, mapDispatchToProps)(SpotApp);
