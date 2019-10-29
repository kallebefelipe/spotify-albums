import fetchMock from 'fetch-mock';
import expect from 'expect';
import AlbumsApi from '../AlbumsApi';


describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  const token = 'Fake Token'
  const header = {'content-type': 'application/json' }
  const payload = {'id': '1'};

  it('response a fetching load albums has been done', () => {
    fetchMock
      .getOnce(`https://api.spotify.com/v1/artists/${payload.id}/albums`, {body: {payload: []}, headers: header})

    const expectedActions = {payload: []}

    return AlbumsApi.getAllAlbums(payload).then((response) => {
      expect(response).toEqual(expectedActions)
    })
  })
})
