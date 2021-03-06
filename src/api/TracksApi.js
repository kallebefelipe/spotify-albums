
class TracksApi {

    static getAllTracks(id) {
      var token = localStorage.getItem("token")
      return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        }).then((response) => response.json()).then((responseData) => {
          return responseData;
        });
      }
}

export default TracksApi;
