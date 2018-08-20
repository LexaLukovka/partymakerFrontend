/* eslint-disable dot-notation,class-methods-use-this */
import axios from 'axios'
import to from 'util-to'
import store from '../store'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3333',
      // baseURL: 'http://94.237.84.15',
      timeout: 10000,
    })
  }

  handleError(err) {
    if (err) {
      if (err.response) {
        throw err.response.data
      } else {
        throw err
      }
    }
  }

  refreshToken() {
    const { user } = store.getState().authReducer
    if (user) {
      this.instance.defaults.headers.common['Authorization'] = user.token
    }
  }

  async request(method, url, params) {
    this.refreshToken()
    const [err, response] = await to(this.instance[method](url, params))
    this.handleError(err)

    return response.data
  }

  get(url, params) {
    return this.request('get', url, params)
  }

  post(url, params) {
    return this.request('post', url, params)
  }

  put(url, params) {
    return this.request('put', url, params)
  }

  delete(url, params) {
    return this.request('delete', url, params)
  }
}

export default new Http()

