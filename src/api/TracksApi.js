
class TracksApi {

    static getAllTracks() {
      return fetch('https://api.spotify.com/v1/albums/1ydnyXPdmHrWXqXDgtQCPf/tracks', {
        headers: {
          'Authorization': 'Bearer BQAOSiBwe_k03VkS8nK9OcWSMWVRjVAzQ6b3nrZkYUT9KUpqTmOsaJRp_qSt2zlbhj21-gGZm5RPQ23cBIbJEcJFSDMbWp0fjVpkVfzTdkCKPOo9XC4-eLdV22FZbIEdw6LOXun1B2X-o9TXD5FtAnfnvmt-P3by1Fgb2d8equuU3MwWHgKnWd4ZZ3Yn46qcWqFMgVaoZzVm_nMunSwhUxcuVXKtyo5iCeeMk6Hndl4K6LB0C6qOy8-ydkd4tNVcj0G0-YB4ipFpDtG5TN3t0vIl--b1rWQs',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        }).then((response) => response.json()).then((responseData) => {
          return responseData;
        });
      }
}

export default TracksApi;
