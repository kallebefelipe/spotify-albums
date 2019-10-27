
class TracksApi {

    static getAllTracks(id) {
      return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        headers: {
          'Authorization': 'Bearer BQBxSilGSqImP5-S6gah1gRTQgq6gCQbRmjEHVHuMmAl24YMhW77CFOFudG1PtL25eZgXQ0IS6pNAoXTaWrBRVXQ7zhGdaxwM9b8hxs5WA50DYvyU7Xdc0M50u3a8ureDStWFADaIxwzrKjdjwVYu6nllOknJIP0DLDQO34_YLvFQvzJSGv4C6yk6WegXwroai3wk2-inC8zGbBPuqZO4JXskZgjo96LaveV9EkNyKTQj4SNl7hkfZdmEySFrwAGZpjhrbjf0Ne5rEpInhhsHFUq0Hhr18rG',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
        }).then((response) => response.json()).then((responseData) => {
          return responseData;
        });
      }
}

export default TracksApi;
