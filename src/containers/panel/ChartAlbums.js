import React from 'react';
import { connect } from 'react-redux';
import TracksList from '../tracks/TracksList';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

class ChartAlbums extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "id-chart",
          events: {
            dataPointSelection: {}
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '60%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: [],
          tickPlacement: 'between'
        },
        fill: {
          opacity: 1,
          colors: []
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        }
      },
      series: [
        {
          name: 'Adele',
          data: []
        }],
      albums: [],
      album_actual: undefined,
      artists: [
        {
          name: 'Adele',
          id: '4dpARuHxo51G3z768sgnrY',
          color: '#F5CA8C'
        },
        {
          name: 'Eminem',
          id: '7dGJo4pcD2V6oG8kP0tJRR',
          color: '#8CD7F5'
        },
        {
          name: 'Ed Sheeran',
          id: '6eUKZXaKkcviH0Ku9w2n3V',
          color: '#8EF764'
        },
        {
          name: 'Maroon 5',
          id: '04gDigrS5kc9YWfZHwBETP',
          color: '#DA64F7'
        },
        {
          name: 'Calvin Harris',
          id: '7CajNmpbOovFoOoasH2HaY',
          color: '#F76464'
        },
      ],
      prevOptions: undefined
    }

    this.dataPointSelection = this.dataPointSelection.bind(this);
  }

  componentDidMount() {
    this.props.fetchAuth();
    this.props.fetchAlbums(this.state.artists[0].id);
  }

  dataPointSelection(event, chartContext, config) {
    this.setState({album_actual: this.state.albums[config.dataPointIndex]});
  }

  mountData() {
    var data = []
    if (this.props.albums.items != undefined) {
      this.props.albums.items.map(album => {
        data.push({
          id: album.id,
          total_tracks: album.total_tracks,
          year: album.release_date.split('-')[0]});
      });
      this.state.albums = data;
      data.sort(function(first, second) {
        return first.year - second.year;
      });
      var serie = []
      data.map(item => {
        serie.push(item.total_tracks);
      });
      var categories = []
      data.map(item => {
        categories.push(item.year);
      });

      var chartEl = document.getElementById("id-chart");
      if (chartEl != null && this.state.prevOptions.xaxis.categories != categories) {
        this.state.options.xaxis.categories = categories;
        this.state.series[0].data = serie;
        ApexCharts.exec("id-chart", "updateOptions", this.state.options);
        ApexCharts.exec("id-chart", "updateSeries", this.state.series);
      }
      this.state.options.xaxis.categories = categories;
      this.state.options.fill.colors = ['#F5CA8C'];
      this.state.series[0].data = serie;
      this.state.options.chart.events.dataPointSelection = this.dataPointSelection;
    }
  }

  updateArtist(e) {
    this.props.fetchAlbums(e.target.value);
    var index = e.target.selectedIndex;
    this.state.series[0].name = e.nativeEvent.target[index].text
    this.state.options.fill.colors = [this.state.artists[index].color];
  }

  render() {
    this.mountData();
    this.state.prevOptions = this.state.options;

    if (this.props.albums.items != undefined) {
      return (

        <div>
          <div className="app-div">
            <h1 className="title">FILTRO DOS ARTISTAS</h1>
            <div className="filter">
              <div id="artist">
                <div>
                  <select id="artist-drop"  onChange={(e) => {this.updateArtist(e)}}>
                  {this.state.artists.map(
                    artist => <option value={artist.id} key={artist.id}>{artist.name}</option>)}
                  </select>
                  <p></p>
                  <p>{this.state.value}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="app-div" id="chart">
            <h1 className="title">PAINEL DE ÁLBUNS</h1>
            <div id="chart-album">
              <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" id="id-chart"/>
            </div>
          </div>
          <div className="app-div" id="tracks">
            <h1 className="title">TODAS AS MÚSICAS DO ARTISTA</h1>
            {this.state.album_actual != undefined ? (<TracksList album={this.state.album_actual}/>):('')}

          </div>
        </div>

      );

    }
    return (
      'Loading...'
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albumsReducer.albums
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: (id) => {
      dispatch({type: "LOAD_ALBUMS_REQUEST", payload: {id}})
    },
    fetchAuth: () => {
      dispatch({type: "LOGIN_CLIENT_REQUEST"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartAlbums);
