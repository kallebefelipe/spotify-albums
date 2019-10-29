import fetchMock from 'fetch-mock';
import expect from 'expect';
import AuthApi from '../AuthApi';


describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  const token = 'Fake Token'
  const header = {'content-type': 'application/json' }
  const payload = {'id': '1'};

  it('response a fetching clith auth has been done', () => {
    fetchMock
      .getOnce(`http://127.0.0.1:5000/token`, {body: {payload: []}, headers: header})

    const expectedActions = {payload: []}

    return AuthApi.loginUser(payload).then((response) => {
      expect(response).toEqual(expectedActions)
    })
  })
})
