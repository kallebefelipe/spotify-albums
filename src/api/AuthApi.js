import querystring from 'querystring';
import axios from 'axios';

class AuthApi {

  static loginUser() {
    // var params = {'grant_type': 'client_credentials'};
    // const searchParams = Object.keys(params).map((key) => {
    //   return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    // }).join('&');
    // return fetch('https://accounts.spotify.com/api/token', {
    //   method: 'POST',
    //   mode: "no-cors",
    //   // params: {'grant_type': 'client_credentials'},
    //   headers: {
    //     'Authorization': "Basic MjBiMzk3ZGU5YmEyNDE0Yjk2NGJmNTVjZmNlYzllYzM6ZmY0MDYzZGM1MDAxNDFkZTlhNjBiNjI2ZjY1YmNiMDg=",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept':'application/json'
    //   },
    //   // auth: {
    //   //   username: '20b397de9ba2414b964bf55cfcec9ec3',
    //   //   password: 'ff4063dc500141de9a60b626f65bcb08'
    //   // }
    //   body: "grant_type=client_credentials"
    // }).then((response) =>  {
    //     debugger
    //     return response.json();
    //   })
      return axios({
        url: 'http://accounts.spotify.com/api/token',
        method: 'post',
        params: {
          grant_type: 'client_credentials'
        },
        headers: {
          // 'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Credentials': true,
          'Accept':'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
          username: '20b397de9ba2414b964bf55cfcec9ec3',
          password: 'ff4063dc500141de9a60b626f65bcb08'
        }}).then((response) =>  {
                debugger
                return response.json();
              })
    }
}

export default AuthApi;
