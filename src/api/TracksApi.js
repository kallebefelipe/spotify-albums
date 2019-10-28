
class TracksApi {

    static getAllTracks(id) {
      return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          'Authorization': 'Bearer BQChB0jM7BIjtvzgN9M27mSnhhk80gX6F9X2LSqSA1Gnat1ju88Wq8FzuxnSw1exq2MUCQC0wVJo0058_uc',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        }).then((response) => response.json()).then((responseData) => {
          return responseData;
        });
      }
}

export default TracksApi;
