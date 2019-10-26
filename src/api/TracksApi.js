
class TracksApi {

    static getAllTracks(id) {
      return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          'Authorization': 'Bearer BQB8TgdiUVKR-jFIN4djdXPU9KoksqXUcF0dPMiAzHox1bWbbFdApIfuVE79qV63gHwLV8tZlHA7mxoH6YNFJQg-FED0n9IKhiZBeAhCNv9PWGLV7tZjrDHyGlHn8YmuFVlVOOSSQ6f_d-dLHaSXnQuZ936e2McxnVe0pOO_cvnXu0m6sDZ6bMwBoo4_ZEgF3-zEiQ0ygnBZYz5x4LWX7CC2u_sMjXzz3w8npieUpIYGIb4Aw696uoYJZlz7guu-QQshI5lvp8s6ObnYaGz_56g3rmaIypZU',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        }).then((response) => response.json()).then((responseData) => {
          return responseData;
        });
      }
}

export default TracksApi;
