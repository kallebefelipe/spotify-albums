import React from 'react';
import {Link} from "react-router-dom";

class Album extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    var state = this.props.location.state;
    return (
      <div class="app-div" id="album">

      <div id="div-album">

        <div id="head-album">

          <div class="head-album">
              <img id='img-album' src={state.images[0].url} alt="Explicit" />
              <h5 id='h-album'>{state.name}</h5>
              <h5 id='h-album'>{state.artists[0].name}</h5>
              <h5 id='h-album'>{state.release_date.split('-')[0]} - {state.total_tracks} Song</h5>
              <Link to='/' className="voltar">Voltar</Link>
          </div>
        </div>
          <div id="tracks-album">
            <div class="container-album">
            {state.tracks.items.map(track =>
              <div id="track-album">
                <div class="container-head">
                  <h5 id='tr-album-name'>{track.name}</h5>
                    <h5 id='n-track'>N° {track.track_number}</h5>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
