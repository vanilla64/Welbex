import axios from 'axios'
import { FETCH_URL } from './constants'

export default axios.create({
  baseURL: FETCH_URL,
  responseType: 'json',
})
