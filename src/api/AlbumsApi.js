
class AlbumsApi {

  static getAllAlbums(id) {
    return fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
      headers: {
        'Authorization': 'Bearer BQAXZPkgry9jbpMt40Nf2Z0QB7KXmu3kFitb3sSQ4W-PA56xmW8XaHduZ_zQg8p8Ri7p5AjNpuv1vnVZiXtVdLU0rlr532kh0ChVRcJqHjyv2MlmVzLzVNfG-U1QchQ2AdbwRY1127uV2pfi1KP6FcwGfuZSXRyiqBSPgncP-_oqZf6MD6rUYhzd9MoS_sH4pHmb0E4AaUzSNSLPeuCpi7b11WIxQvkjWBNk1p0UkNUBwj0i71Kg-PMNsltHBbh4Got8mlan1NRyCJpqHMyuxlw9SMnCxVph',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      }).then((response) => response.json()).then((responseData) => {
        return responseData;
      });
    }

    static getAlbum() {
      return fetch('https://api.spotify.com/v1/albums/1ydnyXPdmHrWXqXDgtQCPf', {
        headers: {
          'Authorization': 'Bearer BQCZmrT4OUye9A28D2n7M5PEEbZ6X0h6oA_eiuwyWQ_XMqcnB__ItxH0t7WC6yJQaDTYH_fyKuAton6hxSpfBG11R0bF3oxI6Kzdsg2MaotrquWok6QJTHXosUsvvlOrYvjkVrAphsvalQY8A_Y-QphMmkEYi6XuyghBUD53VKb4pALlblse35WMmoYM6q9EaADQtQi0Y5FOqQtsM2BmNVLudQx0z6RpO9ok4Qbrivws3txVh-6x1KSu-UbhZVQq4JrWj5dgnxU2f9VqwkytlE5XPz4R7eQ-',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        }).then((response) => response.json()).then((responseData) => {
          return responseData;
        });
      }
}

export default AlbumsApi;
