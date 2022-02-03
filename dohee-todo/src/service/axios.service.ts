import axios from 'axios'

export default class AxiosService {
  static readonly instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
  })
}
