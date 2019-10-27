
class AlbumsApi {

  static getAllAlbums(id) {
    return fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
      headers: {
        'Authorization': 'Bearer BQCXGri4PBXCWi4akexAqSiFxlRGRuteuEjqqzKjC7Z-SNw6F-aKsGW_pBvIa20ZBrHYvDEBVEXKGKw-8DyHYkpKsPxTzMDk9uN19J5Hqtnq8oJgjnGMRNz6nUd9aOtTQY2COw-yJcNb8NpLPAGm9zSHSFKhMpzSCNDFYOnRAO_3FYvhm7KJStIs6zJ_Grfg8hMEdiaXcyRx7PdhOQgkHvCmDKw0l3hZDm53j2JimgVoGL4fw0XDoRJHu10lAGJkkcNb5QGBXpHHAx3axRiBH8yrlBiegB4t',
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
