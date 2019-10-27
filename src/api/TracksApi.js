
class TracksApi {

    static getAllTracks(id) {
      return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          'Authorization': 'Bearer BQAaSM5tt3b5D3ihDt-zSWE3GEQ7UJPlzi-uAdIgxxIRia3bvKAxiuJ_Y-2pX3BHocWYjMI45BtFa5r03NEe6j4MH4nyCgmbg4ofojl5oCajjIwyl1PSQqqh4FF98uboZKw52fTvQ8YMglOdM988hJc1H2VM_pkh8MlCATWZIlHg5A6-ls_aUeoUYTNMjYmWhG_WDWft3qPk7mLATupQYsB2WXp5M7n1eMl44I42dZO9PJK4qQ7k115QkeDbnbPxePrGy3p-VRNxR9aIOiR5cqTLuAwZxRtf',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        }).then((response) => response.json()).then((responseData) => {
          return responseData;
        });
      }
}

export default TracksApi;
