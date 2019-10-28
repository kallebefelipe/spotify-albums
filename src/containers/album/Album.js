import React from 'react';
import { connect } from 'react-redux';
import { loadAlbum } from '../../sagas';

class Album extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}

  }

  componentDidMount() {
    this.props.fetchAlbum();
  }


  render() {
    return (
      'Albums Info'
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.albumReducer.album
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: () => {
      dispatch(loadAlbum());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
