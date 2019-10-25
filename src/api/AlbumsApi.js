
class AlbumsApi {

  static getAllAlbums() {
    return fetch('https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY/albums', {
      headers: {
        'Authorization': 'Bearer BQBhX1nV1KUAUy1qjZySQWe6weXf7VZxEuNno1Yu1uS8htdOdViNF2154jD-0O0KVxW0JVx9RTZqRUxdtdc0JldMdvNif9lNdZD0NhQ_kW_SVEtYDUDFxDFzDp_NuXmKZ64kLD6p1cgI8AowwOFweNG45MbZYmdqpFfaSf2Z698ZVS-LkJ86Tsnjb-W8Hf5_Q2iTcLV86nRByfvoCOfWLbkKxoA8AEHyKs-QlWAizqjU8l9kP1sAht-J37xnYMgB4d9HWrX7gRZWmTs_8ak2nRQHoyNUtnXM',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      }).then((response) => response.json()).then((responseData) => {
        return responseData;
      });
    }
}

export default AlbumsApi;
