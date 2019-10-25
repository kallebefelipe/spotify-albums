import React from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from '../../actions/albums';
import ReactApexChart from 'react-apexcharts';

class ChartAlbums extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          events: {
            dataPointSelection: function(event, chartContext, config) {
              console.log(config);
            }
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
        },
        fill: {
          opacity: 1
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
      }
    ],
    }
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  mountData() {
    var data = []
    if (this.props.albums.items != undefined) {

      this.props.albums.items.map(album => {
        data.push({
          total_tracks: album.total_tracks,
          year: album.release_date.split('-')[0]});
      });
      data.sort(function(first, second) {
        return first.year - second.year;
      });
      console.log(data)
      var serie = []
      data.map(item => {
        serie.push(item.total_tracks);
      });
      var categories = []
      data.map(item => {
        categories.push(item.year);
      });

      this.state.options.xaxis.categories = categories;
      this.state.series[0].data = serie;

    }
  }

  render() {
    this.mountData();
    if (this.props.albums.items != undefined) {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" />
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
    fetchAlbums: () => {
      dispatch(loadAlbums());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartAlbums);
