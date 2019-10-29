
class AuthApi {

  static loginUser() {
    return fetch('http://127.0.0.1:5000/token', {
          'Access-Control-Allow-Origin': '*'
        }).then((response) => response.json()).then((responseData) => {
          return responseData;
        });
      }
}

export default AuthApi;
