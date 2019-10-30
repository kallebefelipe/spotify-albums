import React from 'react';
import icon from '../../assets/images/explicit.png'
import { Redirect} from 'react-router';

class TrackListRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      redirect: false
    };
  }

  redirectAlbum(e) {
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/album',
        state: this.props.album
        }}
      />
    }

    return (
      <div id="track" onClick={(e) => {this.redirectAlbum(e)}}>
        <div className="container-head">
            <h5 id="track-h2">N° {this.props.track.disc_number}</h5>
            <h5 id="tr-name">Track {this.props.track.track_number}</h5>
        </div>
        <div className="container-track">
            <h5 id="tr-music">{this.props.track.name}</h5>
            <div className="info-track">
              {(() => {
                var pop = this.props.album.popularity;
                switch (true) {
                  case (0 <=pop && pop < 35):   return <h5 id="tr-pop">Baixa popularidade</h5>;
                  case (35 <= pop && pop < 65): return <h5 id="tr-pop">Média popularidade</h5>;
                  case (pop > 56):  return <h5 id="tr-pop">Alta popularidade</h5>;
                  default:      return <h5 id="tr-pop">Sem popularidade</h5>;
                }
              })()}

              {this.props.track.explicit &&
              <div id='icon-explicit'><img id='img-explicit' src={icon} alt="Explicit" /></div>}
            </div>
        </div>
      </div>
    )
  }
};

export default TrackListRow;
