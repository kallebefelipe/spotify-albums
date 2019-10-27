import React from 'react';
import TrackListRow from './TrackListRow';
import { connect } from 'react-redux';

class Tracks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      prevProps: undefined
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTracks(this.props.album.id);
    this.state.prevProps = this.props.album;
  }

  componentDidUpdate(prevProps) {
    if (this.props.album != this.state.prevProps) {
      this.props.fetchTracks(this.props.album.id);
    }
    this.state.prevProps = this.props.album;
    this.state.filtered = [];
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.tracks.items;

      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.tracks.items;
    }
    this.setState({
      filtered: newList
    });
  }

  render() {

    if (this.props.tracks.items != undefined) {
      if (this.state.filtered.length == 0) {
        this.state.filtered = this.props.tracks.items;
      }
      return (
        <div>
          <div id="filer-track">
            <input type="text" onChange={this.handleChange} className="input" placeholder="Buscar música" />
          </div>
          <div className="container">
            {this.state.filtered.map(track => <TrackListRow  key={track.id} track={track}/>)}
          </div>
        </div>
      );
    }
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracksReducer.tracks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTracks: (id) => {
      dispatch({type: "LOAD_TRACKS_REQUEST", payload: {id}})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
