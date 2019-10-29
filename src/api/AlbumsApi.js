
class AlbumsApi {

  static getAllAlbums(payload) {
    var token = localStorage.getItem("token")
    return fetch(`https://api.spotify.com/v1/artists/${payload.id}/albums`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      }).then((response) => response.json()).then((responseData) => {
        return responseData;
      });
    }

    static getAlbum() {
      var token = localStorage.getItem("token")
      return fetch('https://api.spotify.com/v1/albums/1ydnyXPdmHrWXqXDgtQCPf', {
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

export default AlbumsApi;
