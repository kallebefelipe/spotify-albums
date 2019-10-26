import React from 'react';


class TrackListRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div id="track">
        <div className="container-head">
            <h5 id='track-h2'>N° {this.props.track.disc_number}</h5>
            <h5 id='tr-name'>Track {this.props.track.track_number}</h5>
        </div>
        <div className='container-track'>
            <h5 id='tr-music'>{this.props.track.name}</h5>
            <h5 id='tr-pop'>Alta popularidade</h5>
        </div>
      </div>
    )
  }
};

export default TrackListRow;
