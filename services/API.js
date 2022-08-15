import axios from 'axios'
import axiosRetry from 'axios-retry'
import { BASE_URL } from 'env'

const AXIOS = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true
})

// for repeat the request 3 time
axiosRetry(AXIOS, { retryDelay: axiosRetry.exponentialDelay })
axiosRetry(AXIOS, { retries: 3 })

export default AXIOS
