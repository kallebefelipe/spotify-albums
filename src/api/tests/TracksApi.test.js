import fetchMock from 'fetch-mock';
import expect from 'expect';
import TracksApi from '../TracksApi';


describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  const token = 'Fake Token'
  const header = {'content-type': 'application/json' }
  const id = '1';

  it('response a fetching load tracks has been done', () => {
    fetchMock
      .getOnce(`https://api.spotify.com/v1/albums/${id}/tracks`, {body: {payload: []}, headers: header})

    const expectedActions = {payload: []}

    return TracksApi.getAllTracks(id).then((response) => {
      expect(response).toEqual(expectedActions)
    })
  })
})
